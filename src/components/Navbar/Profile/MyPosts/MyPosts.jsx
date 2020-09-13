import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map( post => <Post message={post.message} like={post.like} location={post.location} company={post.company}/> );



    let  newPostElement = React.createRef();


    let addPost = () => {
        debugger;
        props.addPost ();

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }

    return (
        <div className={s.MyPosts}>
            <div>
                <h2> My Posts </h2>
            </div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={ addPost }>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}

export default MyPosts;