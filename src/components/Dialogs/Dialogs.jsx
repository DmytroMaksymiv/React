import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dmytro'},
        {id: 2, name: 'Irinka'},
        {id: 3, name: 'Snizanna'},
        {id: 4, name: 'Kata'},
        {id: 5, name: 'Vika'},
        {id: 6, name: 'Valera'},
        {id: 7, name: 'Ivanka'},
        {id: 8, name: 'Taras'},
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are your'},
        {id: 3, message: 'Very Nice'},
        {id: 4, message: 'Nice Job'},
        {id: 5, message: 'Very Grete'},
        {id: 6, message: 'I like BigBurger'},
        {id: 7, message: 'Nice to met you'},
        {id: 8, message: 'I\'m done'},
    ]


    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = messages.map(message => <Message message={message.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h1>
                    {dialogsElements}
                </h1>
            </div>

            <div className={s.messages}>
                <h1>
                    {messagesElements}
                </h1>
            </div>

        </div>
    );
}


export default Dialogs;