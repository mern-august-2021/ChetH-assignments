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
        <form class="form-horizontal" >
            <div class="form-group">
                <hr></hr>
                <h4>Register new user:</h4>
                <label>First name:</label>
                <input type="text" value={ firstname } onChange={ handleFirstname }/>
                { firstnameError ?
                    <p>{ firstnameError }</p> :
                    <p></p>
                }
            </div>
            <div class="form-group">
                <label>Last name:</label>
                <input type="text" value={ lastname } onChange={ handleLastname }/>
                { lastnameError ?
                    <p>{ lastnameError }</p> :
                    <p></p>
                }
            </div>
            <div class="form-group">
                <label>Email:</label>
                <input type="email" value={ email } onChange={ handleEmail }/>
                { emailError ?
                    <p>{ emailError }</p> :
                    <p></p>
                }
            </div>
            <div class="form-group">
                <label>Password:</label>
                <input type="password" value={ password } onChange={ handlePassword }/>
                { passwordError ?
                    <p>{ passwordError }</p> :
                    <p></p>
                }
            </div>
            <div class="form-group">
                <label>Confirm password:</label>
                <input type="password" value={ confirmPassword } onChange={ handleMatch }/>
                { matchError ?
                    <p>{ matchError }</p> :
                    <p></p>
                }
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
