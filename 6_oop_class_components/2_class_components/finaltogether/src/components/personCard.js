import React, { Component } from 'react';

class PersonCard extends Component {

    constructor(props) {
        super(props);
        this.state = { currentAge: this.props.age };
        }

    render() {
        const { fName, lName, hairColor } = this.props;

        return <div>
            <h2>{ lName }, { fName }</h2>
            <p>Age: { this.state.currentAge }</p>
            <p>Hair: { hairColor }</p>
            <button onClick={() => this.setState({ currentAge: this.state.currentAge + 1 }) }>Add year to {fName} {lName}</button>
            <hr/>
        </div>
    }
}

export default PersonCard