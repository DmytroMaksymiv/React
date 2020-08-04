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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h1>
                    <DialogItem name="Dmytro" id="1"/>
                    <DialogItem name="Petro" id="2"/>
                    <DialogItem name="Sveta" id="3"/>
                    <DialogItem name="Julia" id="4"/>
                    <DialogItem name="Vika" id="5"/>
                    <DialogItem name="Valera" id="6"/>
                    <DialogItem name="Ivanka" id="7"/>
                    <DialogItem name="Taras" id="8"/>
                </h1>
            </div>


            <div className={s.messages}>
                <h1>
                    <Message message="Hello"/>
                    <Message message="How are your"/>
                    <Message message="Very Nice"/>
                    <Message message="Nice Job"/>
                    <Message message="Very Grete"/>
                    <Message message="I like BigBurger"/>
                    <Message message="Nice to met you"/>
                    <Message message="I'm done"/>
                </h1>
            </div>

        </div>
    );
}

export default Dialogs;