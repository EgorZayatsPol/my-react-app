import React, {useState} from 'react';
import Myinput from "./input/Myinput";
import Mybutton from "./button/Mybutton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body:''})

    const addNewPost = (e) =>{
        e.preventDefault()
        const newPost = {
            ...post, id:Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})
    }

    return (
        <form>
            <Myinput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="name of post"
            />
            <Myinput
                value={post.body}
                onChange={e => setPost({...post, body : e.target.value})}
                type="text"
                placeholder="description of post"
            />
            <Mybutton onClick={addNewPost} >add post</Mybutton>
        </form>
    );
};

export default PostForm;