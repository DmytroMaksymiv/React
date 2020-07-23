import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
debugger;
    return (
        <div className={s.MyPosts}>
            <div>
                My Posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' like="41" location='Lviv' company='Wokreyn'/>
                <Post message="It's my first post" like="85" location='Kyiv' company='Start Up Forum'/>
                <Post message="It's very nice funktion props" like="585" location='Uzgorod' company='Mariana company'/>
                <Post message="By in Fokstrot" like="895" location='Rivne' company='Appler'/>
                <Post message="We ned JSX Developer" like="405" location='Spas' company='Kuzdei Inc'/>
                <Post
                    message="We ned JSX Developer Lorem23. BJSKere movi2 / Hellow Hany moon. Nice mood/ Whats wrong with you to day?Heeey ..We ned JSX Developer Lorem23. BJSKere movi2 / Hellow Hany moon. Nice mood We ned JSX Developer Lorem23. BJSKere movi2 / Hellow Hany moon. Nice mood"
                    like="85" location='Hrabiv' company='VOVA BABIN Inc'/>
                <Post
                    message="We ned JSX Developer Lorem23. BJSKere movi2 / Hellow Hany moon. Nice mood/ Whats wrong with you to day?Heeey ..We ned JSX Developer Lorem23. BJSKere movi2 / Hellow Hany moon. Nice mood We ned JSX Developer Lorem23. BJSKere movi2 / Hellow Hany moon. Nice mood"
                    like="81125" location='Roznativ' company='Spaser Z LLC'/>

            </div>
        </div>

    );
}

export default MyPosts;