import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"newPostText"} component={Textarea} placeholder={"Post message"}
                   validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>;
}


let AddNewPostFormRedux = reduxForm({
    form: "ProfileAddNewPostForm"
})(AddNewPostForm);

const MyPosts = React.memo(props => {

    let postsElements =
        [...props.posts]
            .reverse()
            .map(post => <Post message={post.message} like={post.like}
                               location={post.location}
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

            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    );
});


export default MyPosts;