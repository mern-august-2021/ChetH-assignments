import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        const { fName, lName, age, hairColor } = this.props;
        return <div>
            <h2>{ lName }, { fName }</h2>
            <p>Age: { age }</p>
            <p>Hair: { hairColor }</p>
            <br/>
        </div>;
    }
}

export default PersonCard