import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app-wraper'>

            <header className='header'>
                <center><img
                    src='https://safrc.org/uploads/monthly_2020_03/safrc.png.fa36d42bd2cac7c836a856e7f874f10a.png'/>
                </center>
                <div>
                    <center> Save the WORLD !!!</center>
                </div>
            </header>


            <nav className='nav'>
                <div>

                    <a>Profile</a>
                </div>
                <di>
                    <a>Messages</a>
                </di>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Setings</a>
                </div>

            </nav>

            <div className='content'>
                <div>
                    <img
                        src='https://img.championat.com/s/735x490/news/big/p/z/samaja-seksualnaja-sportsmenka-mira-pokazala-foto-v_1592462937537164433.jpg'/>
                </div>
                <div>
                    Avatar+Discription
                </div>
                <div>
                    My Posts
                </div>
                <div>
                    New Post
                </div>
                <div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                    <div>
                        Post 3
                    </div>
                </div>
            </div>

            <footer className='footer'>
                <center> it-camasutra 2020</center>
            </footer>

        </div>
    );
}


export default App;
