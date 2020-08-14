import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {


    let postsElements = props.posts.map( post => <Post message={post.message} like={post.like} location={post.location} company={post.company}/> );

    return (
        <div className={s.MyPosts}>
            <div>
                <h2> My Posts </h2>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}

export default MyPosts;