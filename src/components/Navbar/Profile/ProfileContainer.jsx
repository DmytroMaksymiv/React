import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "./../../../Redux/profile-reduser";
import { withRouter} from "react-router-dom";
import {compose} from "redux";
import {getStatus, updateStatus} from "../../../Redux/profile-reduser";



class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push("/login");  //take robutu duze ridko - intrasting ficha
            }
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }


    render() {
        console.log('RENDER PROFILE');
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        );
    }
}

let mapStateToProps = (state) => {
    console.log('mapStateToProps PROFILE')
    return ({

    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
    })
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus} ),
    withRouter,
    //withAuthRedirect
) (ProfileContainer);




