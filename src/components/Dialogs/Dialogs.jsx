import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h1>
                    <div className={s.dialog + ' ' + s.active}>
                        Dmytro
                    </div>
                    <div className={s.dialog}>
                        Petro
                    </div>
                    <div className={s.dialog}>
                        Sveta
                    </div>
                    <div className={s.dialog}>
                        Kola
                    </div>
                    <div className={s.dialog}>
                        Vika
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
                </h1>
            </div>

        </div>
    );
}

export default Dialogs;