import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {

    return (
        <div className={s.message}> {props.message}</div>
    );
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dmytro'},
        {id: 2, name: 'Irinka'},
        {id: 3, name: 'Snizanna'},
        {id: 4, name: 'Kata'},
        {id: 5, name: 'Vika'},
        {id: 6, name: 'Valera'},
        {id: 7, name: 'Ivanka'},
        {id: 8, name: 'Taras'},
    ]

    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are your'},
        {id: 3, message: 'Very Nice'},
        {id: 4, message: 'Nice Job'},
        {id: 5, message: 'Very Grete'},
        {id: 6, message: 'I like BigBurger'},
        {id: 7, message: 'Nice to met you'},
        {id: 8, message: 'I\'m done'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h1>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                    <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
                    <DialogItem name={dialogsData[6].name} id={dialogsData[6].id}/>
                    <DialogItem name={dialogsData[7].name} id={dialogsData[7].id}/>
                </h1>
            </div>


            <div className={s.messages}>
                <h1>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                    <Message message={messagesData[2].message}/>
                    <Message message={messagesData[3].message}/>
                    <Message message={messagesData[4].message}/>
                    <Message message={messagesData[5].message}/>
                    <Message message={messagesData[6].message}/>
                    <Message message={messagesData[7].message}/>
                </h1>
            </div>

        </div>
    );
}

export default Dialogs;