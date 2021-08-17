import React, { useState } from 'react';

const ColorDisplay = (props) => {
    const { colorList, setColorList } = props;

    return (
        <div style={{margin:"auto"}}>
            <div style={{display:"flex"}}>
            {   
                colorList.map((color, index)=>(
                    <div key={index} style={{width:"100px", height:"100px", 
                    margin:"10px", backgroundColor:color.name}}>
                        <p>{color.name}</p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default ColorDisplay;