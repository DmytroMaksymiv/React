import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "./../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.textredact}>
                <center>
                    <img src={profile.photos.large}/>
                </center>
            </div>
            <center>
                <h2><ProfileStatusWithHooks status={status} updateStatus={updateStatus}/></h2>
            </center>
        </div>
    );
}

export default ProfileInfo;