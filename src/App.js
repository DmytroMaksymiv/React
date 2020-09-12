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
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {


    return (

            <div className='app-wraper'>

                <Header/>
                <Navbar/>
                <div className='app-wraper-content'>

                    {/*<Route path='/settings' component={Profile}/>*/}

                    <Route path='/profile' render={() => <Profile
                                                            profilePage={props.state.profilePage}
                                                            addPost={props.addPost}
                                                            updateNewPostText = {props.updateNewPostText}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>

                </div>
                <Footer/>
            </div>
    );
}


export default App;
