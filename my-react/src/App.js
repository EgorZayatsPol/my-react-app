import React, {useRef, useState} from 'react';
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import Postlist from "./components/Postlist";
import Mybutton from "./components/UI/button/Mybutton";
import Myinput from "./components/UI/input/Myinput";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id:1, title:'eee', body : 'dff'},
        {id:2, title:'aaaa', body : 'opp'},
        {id:3, title:'zzz', body : 'qwqq'}
    ])

    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a , b) => a[sort].localeCompare(b[sort])))

    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin:'15px 0'}}/>
        <div>
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
            defaultValue="sorting"
            options={[
                {value: 'title', name:'By name'},
                {value: 'body', name:'By description'}
            ]}
            />
        </div>
        {posts.length
            ?
            <Postlist remove={removePost} posts={posts} title={"1 Posts List"}/>
            :
            <h1 style={{textAlign:'center'}}>
                Posts were not found
            </h1>
        }
    </div>
  );
}

export default App;
