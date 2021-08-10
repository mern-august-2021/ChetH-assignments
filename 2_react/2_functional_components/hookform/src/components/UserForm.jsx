import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const newUser = { firstname, lastname, email, password, confirmPassword };
    
    return (
        <form class="form-horizontal" >
            <div class="form-group">
                <hr></hr>
                <h4>Register new user:</h4>
                <label>First name:</label>
                <input type="text" value={ firstname } onChange={ (event) => setFirstname(event.target.value)}/>
            </div>
            <div class="form-group">
                <label>Last name:</label>
                <input type="text" value={ lastname } onChange={ (event) => setLastname(event.target.value)}/>
            </div>
            <div class="form-group">
                <label>Email:</label>
                <input type="email" value={ email } onChange={ (event) => setEmail(event.target.value)}/>
            </div>
            <div class="form-group">
                <label>Password:</label>
                <input type="password" value={ password } onChange={ (event) => setPassword(event.target.value)}/>
            </div>
            <div class="form-group">
                <label>Confirm password:</label>
                <input type="password" value={ confirmPassword } onChange={ (event) => setConfirmPassword(event.target.value)}/>
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
