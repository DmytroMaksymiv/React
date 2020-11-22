import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import * as PropTypes from "prop-types";
import {Field, reduxForm} from "redux-form";


let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"newPostText"}  component={"textarea"}/>
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>;
}



let AddNewPostFormRedux = reduxForm({
    form: "ProfileAddNewPostForm"
}) (AddNewPostForm);


const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} like={post.like} location={post.location}
                                                      company={post.company}/>);


    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div className={s.MyPosts}>
            <div>
                <h2> My Posts </h2>
            </div>

            <AddNewPostFormRedux onSubmit={onAddPost}/>


            <div className={s.posts}>
                {postsElements}
            </div>


        </div>

    );
}



export default MyPosts;