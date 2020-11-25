import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
    form: 'login',                           // a unique name for this form
})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit} />

        </div>
    );
}




export default Login;