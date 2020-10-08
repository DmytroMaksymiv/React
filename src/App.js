import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {


    return (

            <div className='app-wraper'>

                <Header/>
                <Navbar/>
                <div className='app-wraper-content'>



                    <Route path='/profile' render={() => <Profile /*store={props.store}*/ />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer /*store={props.store}*/ />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>

                    <Route path='/settings' render={() => <Settings/>}/>



                    <Route path='/users' render={() => <UsersContainer/> }/>



                </div>
                <Footer/>
            </div>
    );
}


export default App;
