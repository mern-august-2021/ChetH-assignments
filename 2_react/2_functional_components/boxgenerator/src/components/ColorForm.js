import React, { useState } from 'react';

const ColorForm = (props) => {
    const { colorList, setColorList } = props;
    const [name, setName] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(name.length<3){
            setErrorMsg("Enter valid color");
            }
        else{
            setColorList([...colorList, {
                name: name
            }])
            setName("");
            setErrorMsg("");
        }
    }
    return(
        <div>
            <h1>Add a color box</h1>
            {
                errorMsg?
                <p>{errorMsg}</p>
                :null
            }
            <form onSubmit={ handleSubmit }>
                {
                    name.length>0 && name.length <3?
                    <span>Color must be at least 3 characters long</span>
                    :null
                }
                <p>
                    <label style={{margin:"5px"}} htmlFor="name">Color: </label>
                    <input value={ name } name="name" onChange={(event)=>{
                        console.log(event.target);
                        console.log(event.target.value);
                        setName(event.target.value)}} type="text" />
                <input type="submit" value="Add" style={{margin:"10px"}}/>
                </p>
            </form>
        </div>
    )
}
export default ColorForm;