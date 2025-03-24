import React, {useRef, useState} from 'react';
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import Postlist from "./components/Postlist";
import Mybutton from "./components/UI/button/Mybutton";
import Myinput from "./components/UI/input/Myinput";

function App() {
    const [posts, setPosts] = useState([
        {id:1, title:'JavaScript', body : 'Description'},
        {id:2, title:'JavaScript 2', body : 'Description'},
        {id:3, title:'JavaScript 3', body : 'Description'}
    ])

    const [title, setTitle] = useState('')
    const bodyInputRef = useRef();
    const addNewPost = (e) =>{
     e.preventDefault()
        console.log(title)
    }
  return (
    <div className="App">
        <form>
            <Myinput
                value={title}
                onChange={e => setTitle(e.target.value)}
                type="text"
                placeholder="name of post"
            />
            <Myinput
                ref={bodyInputRef}
                type="text"
                placeholder="description of post"
            />
            <Mybutton onClick={addNewPost} disabled>add post</Mybutton>
        </form>
        <Postlist posts={posts} title={"1 Posts List"}/>
    </div>
  );
}

export default App;
