import React, {useState} from 'react';

const Tabs = (props) => {
    const { contentState, setContentState, selectedTab, setSelectedTab } = props;
    
    const selectTab = (index) => {
        setSelectedTab(index);
    }

    return (
        <div>
        {
            contentState.map((object, index)=>
            (
                <button onClick={(event)=>selectTab(index)}>{object.label}</button>
            ))
      }
      </div>
    )
}

export default Tabs;