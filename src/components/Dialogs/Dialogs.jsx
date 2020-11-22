import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import createReduxForm from "redux-form/lib/createReduxForm";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id}/>);
    let newMessageBody = state.newMessageBody;


    let newTextElement = React.createRef(); //moi dorobotki codu
    let addText = () => {
        let text = newTextElement.current.value;
        alert(text);
    }


    let addNewMesage = (values) => {
        props.sendMessage(values.newMessageBody);
    }


    if (!props.isAuth) return <Redirect to={"/login"}/>;

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


                    <AddMessageFormRedux onSubmit={addNewMesage}/>


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


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter you message"}/>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm);

export default Dialogs;