import React from 'react';

const Show = (props) => {
    const { contentState, setContentState, selectedTab, setSelectedTab } = props;

    return (
        <div>{ contentState[selectedTab].content }</div>
    )
}

export default Show;