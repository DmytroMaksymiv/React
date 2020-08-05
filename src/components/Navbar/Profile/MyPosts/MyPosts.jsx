import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postData = [
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
                <Post message={postData[0].message} like={postData[0].like} location={postData[0].location} company={postData[0].company}/>
                <Post message={postData[1].message} like={postData[1].like} location={postData[1].location} company={postData[1].company}/>
                <Post message={postData[2].message} like={postData[2].like} location={postData[2].location} company={postData[2].company}/>
                <Post message={postData[3].message} like={postData[3].like} location={postData[3].location} company={postData[3].company}/>
                <Post message={postData[4].message} like={postData[4].like} location={postData[4].location} company={postData[4].company}/>
                <Post message={postData[5].message} like={postData[5].like} location={postData[5].location} company={postData[5].company}/>
                <Post message={postData[6].message} like={postData[6].like} location={postData[6].location} company={postData[6].company}/>
                <Post message={postData[7].message} like={postData[7].like} location={postData[7].location} company={postData[7].company}/>
            </div>
        </div>

    );
}

export default MyPosts;