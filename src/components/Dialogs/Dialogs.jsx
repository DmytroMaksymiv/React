import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElements =  props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.messages.map(message => <Message message={message.message}/>);

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