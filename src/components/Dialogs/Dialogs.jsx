import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.state.messages.map(message => <Message message={message.message}/>);





    let  newTextElement = React.createRef();

    let addText = () => {
        let text = newTextElement.current.value;
        alert (text);
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
                    {messagesElements}
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