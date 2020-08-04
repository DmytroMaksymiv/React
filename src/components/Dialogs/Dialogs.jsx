import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h1>
                    <div className={s.dialog + ' ' + s.active}>
                        <NavLink to="/dialogs/1">Dmytro</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/2">Petro</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/3">Sveta</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/4">Julia</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/5">Vika</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/6">Valera</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/7">Ivanka</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/8">Taras</NavLink>
                    </div>
                </h1>
            </div>
            <div className={s.messages}>
                <h1>
                    <div className={s.message}> Hello</div>
                    <div className={s.message}> How are your</div>
                    <div className={s.message}> Very Nice</div>
                    <div className={s.message}> Nice Job</div>
                    <div className={s.message}> Very Grete</div>
                    <div className={s.message}> I like BigBurger</div>
                    <div className={s.message}> Nice to met you</div>
                    <div className={s.message}> I'm done</div>
                </h1>
            </div>

        </div>
    );
}

export default Dialogs;