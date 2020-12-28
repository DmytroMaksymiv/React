import React, {Component, Suspense} from 'react';
import './App.css';
/*import Header from "./components/Header/Header";*/
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reduser";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";


//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";
//import LoginPage from "./components/Login/Login";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Navbar/Profile/ProfileContainer'))
const LoginPage = React.lazy(() => import('./components/Login/Login'))


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }


        return (
            <div className='app-wraper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wraper-content'>

                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfileContainer)}/>

                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>

                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>


                    <Route path='/login' render={() => {                 //vgori zrobleno cherez hoc
                        return <Suspense fallback={<Preloader/>}>
                            <LoginPage/>
                        </Suspense>
                    }}/>

                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <AppContainer/>
            </React.StrictMode>
        </Provider>
    </BrowserRouter>

}

export default SamuraiJSApp;