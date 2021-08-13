import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const newUser = { firstname, lastname, email, password, confirmPassword };
    const [registered, setRegistered] = useState(false);
    const [firstnameError, setFirstnameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [matchError, setMatchError] = useState("");

    const registerUser = (event) => {
        event.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmPassword };
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setRegistered(true);
    }

    const handleFirstname = (event) => {
        setFirstname(event.target.value);
        if(event.target.value.length < 2) {
            setFirstnameError("First name needs to be 2 or more characters");
        } else {
            setFirstnameError("");
        }
    }
    
    const handleLastname = (event) => {
        setLastname(event.target.value);
        if(event.target.value.length < 2) {
            setLastnameError("Last name needs to be 2 or more characters");
        } else {
            setLastnameError("");
        }
    }
    
    const handleEmail = (event) => {
        setEmail(event.target.value);
        if(event.target.value.length < 5) {
            setEmailError("Email needs to be 5 or more characters");
        } else {
            setEmailError("");
        }
    }
    
    const handlePassword = (event) => {
        setPassword(event.target.value);
        if(event.target.value.length < 8) {
            setPasswordError("Password needs to be 8 or more characters");
        } else {
            setPasswordError("");
        }
    }
    
    const handleMatch = (event) => {
        setConfirmPassword(event.target.value);
        if(password != event.target.value) {
            setMatchError("Passwords do not match");
        } else {
            setMatchError("");
        }
    }
    
    return (
        <form className="form-horizontal" >
            <div className="form-group">
                <hr></hr>
                <h4>Register new user:</h4>
                <label className="col-sm-2 control-label">First name:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" value={ firstname } onChange={ handleFirstname }/>
                    { firstnameError ?
                        <p>{ firstnameError }</p> :
                        <p></p>
                    }
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">Last name:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" value={ lastname } onChange={ handleLastname }/>
                    { lastnameError ?
                        <p>{ lastnameError }</p> :
                        <p></p>
                    }
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">Email:</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" value={ email } onChange={ handleEmail }/>
                    { emailError ?
                        <p>{ emailError }</p> :
                        <p></p>
                    }
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">Password:</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" value={ password } onChange={ handlePassword }/>
                    { passwordError ?
                        <p>{ passwordError }</p> :
                        <p></p>
                    }
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">Confirm password:</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" value={ confirmPassword } onChange={ handleMatch }/>
                    { matchError ?
                        <p>{ matchError }</p> :
                        <p></p>
                    }
                </div>
            </div>
            <hr></hr>
            <div><h4>Entered form fields:</h4>
            <p>First name: { newUser.firstname }</p>
            <p>Last name: { newUser.lastname }</p>
            <p>Email: { newUser.email }</p>
            <p>Password: { newUser.password }</p>
            <p>Confirm pw: { newUser.confirmPassword }</p>
            <hr></hr>
            </div>
        </form>
        );
    };
export default UserForm;
