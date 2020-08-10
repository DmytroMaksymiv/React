import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', like: 445458, location: 'Lviv', company:'Wokreyn'},
        {id: 2, message: 'It\'s my first post', like: 5678944467, location: 'Kyiv', company:'Start Up Forum'},
        {id: 3, message: 'It\'s very nice funktion props', like: 567, location: 'Uzgorod', company:'Mariana company'},
        {id: 4, message: 'By in Fokstrot', like: 431, location: 'Rivne', company:'Appler'},
        {id: 5, message: 'We ned JSX Developer', like: 1141, location: 'Spas', company:'Kuzdei Inc'},
        {id: 6, message: 'We ned JSX Developer Lorem23. BJSKere movi2 / Hellow Hany moon. Nice mood/ Whats wrong with you to day?Heeey ..We ned JSX Developer Lorem23. BJSKere movi2 / Hellow Hany moon. Nice mood We ned JSX Developer Lorem23. BJSKere movi2 / Hellow Hany moon. Nice mood',
            like: 81, location: 'Lviv', company:'Wokreyn'},
        {id: 7, message: 'We ned JSX Developer Lorem23. BJSKere movi2 / Hellow Hany moon. Nice mood/ Whats wrong with you to day?Heeey ..We ned JSX Developer Lorem23. BJSKere movi2 / Hellow Hany moon. Nice mood We ned JSX Developer Lorem23. BJSKere movi2 / Hellow Hany moon. Nice mood',
            like: 901, location: 'Hrabiv', company:'VOVA BABIN Inc'},
        {id: 8, message: 'It\'s done', like: 401, location: 'Roznativ', company:'Spaser Z LLC'},

    ]


    let postsElements = posts.map( post => <Post message={post.message} like={post.like} location={post.location} company={post.company}/> );

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