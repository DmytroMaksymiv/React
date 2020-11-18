import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "./../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div>
            {/*<div>
                <img
                    src='https://img.championat.com/s/735x490/news/big/p/z/samaja-seksualnaja-sportsmenka-mira-pokazala-foto-v_1592462937537164433.jpg'/>
            </div>*/}
            <div className={s.textredact}>
                <center>
                    <img src={props.profile.photos.large}/>
                </center>
            </div>
            <center>
                <h2><ProfileStatus status={"Hello in My Social Network !!!"}/></h2>
            </center>
        </div>
    );
}

export default ProfileInfo;