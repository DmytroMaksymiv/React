import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (
        <div className='app-wraper'>

            <Header/>
            <Navbar/>
            {/*<Profile/>*/}
            <div className='app-wraper-content'>
                <Dialogs/>
            </div>
            <Footer/>
        </div>
    );
}


export default App;
