import React from 'react';
import './App.css';
/*import Header from "./components/Header/Header";*/
import Navbar from "./components/Navbar/Navbar";
/*
import Profile from "./components/Navbar/Profile/Profile";
*/
import Footer from "./components/Footer/Footer";
/*
import Dialogs from "./components/Dialogs/Dialogs";
*/
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

const App = (props) => {


    return (

            <div className='app-wraper'>

                <HeaderContainer/>
                <Navbar/>
                <div className='app-wraper-content'>



                    <Route path='/profile/:userId?' render={() => <ProfileContainer /*store={props.store}*/ />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer /*store={props.store}*/ />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>

                    <Route path='/settings' render={() => <Settings/>}/>



                    <Route path='/users' render={() => <UsersContainer/> }/>



                    <Route path='/login' render={() => <LoginPage /> }/>



                </div>
                <Footer/>
            </div>
    );
}


export default App;
