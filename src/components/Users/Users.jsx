import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://img.championat.com/s/735x490/news/big/p/z/samaja-seksualnaja-sportsmenka-mira-pokazala-foto-v_1592462937537164433.jpg',
                    followed: false,
                    fullName: 'Dmytro',
                    status: 'I am a boss',
                    location: {city: 'Lviv', country: 'Ukraine'}
                },
                {
                    id: 2,
                    photoUrl: 'https://img.championat.com/s/735x490/news/big/p/z/samaja-seksualnaja-sportsmenka-mira-pokazala-foto-v_1592462937537164433.jpg',
                    followed: true,
                    fullName: 'Alina',
                    status: 'I am a boss too',
                    location: {city: 'New York', country: 'USA'}
                },
                {
                    id: 3,
                    photoUrl: 'https://img.championat.com/s/735x490/news/big/p/z/samaja-seksualnaja-sportsmenka-mira-pokazala-foto-v_1592462937537164433.jpg',
                    followed: false,
                    fullName: 'Kata',
                    status: 'I am a boss too',
                    location: {city: 'London', country: 'Great Britain'}
                }
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                                : <button onClick={ () => {props.follow(u.id)} }>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>

    );

}


export default Users;