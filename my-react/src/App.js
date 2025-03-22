import React, {useState} from 'react';
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import Postlist from "./components/Postlist";

function App() {
    const [posts, setPosts] = useState([
        {id:1, title:'JavaScript', body : 'Description'},
        {id:2, title:'JavaScript 2', body : 'Description'},
        {id:3, title:'JavaScript 3', body : 'Description'}
    ])

  return (
    <div className="App">
        <Postlist posts={posts} title={"1 Posts List"}/>

    </div>
  );
}

export default App;
