import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message message={message.message}/>);
    let newMessageBody = state.newMessageBody;





    let  newTextElement = React.createRef(); //moi dorobotki codu
    let addText = () => {
        let text = newTextElement.current.value;
        alert (text);
    }




    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h1>
                    {dialogsElements}
                </h1>
            </div>

            <div className={s.messages}>
                <h1>
                    <div>{messagesElements}</div>
                    <div>
                        <div><textarea value={newMessageBody}
                                       onChange={onNewMessageChange}
                                       placeholder='Enter you message'></textarea></div>
                        <div><button onClick={onSendMessageClick} >Send</button></div>
                    </div>
                </h1>
            </div>
            <div className={s.change}>
                <center>
                    <textarea ref={newTextElement}></textarea>
                    <div>
                        <button onClick={addText}>Add TEXT</button>
                    </div>
                </center>
            </div>

        </div>
    );
}


export default Dialogs;