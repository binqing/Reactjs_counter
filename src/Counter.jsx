import React, {Component} from 'react';
import { PropTypes } from 'prop-types';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
        }
    }

    Increment = (e) => {
        this.setState({count: this.state.count+1});
    } 

    Decrement = (e) => {
        if (this.state.count ===0) {
            alert("Count can't be less than zero")
        } else {
            this.setState({count: this.state.count-1});
        }
    }

    render () {
        return (
            <div className = "countercomponent">
                <p> The count is {this.state.count}</p>
                <button onClick = {this.Increment}> Increment </button>
                <button onClick = {this.Decrement}> Decrement </button>
            </div>
        );
    };   
}

Counter.propTypes = {
    count: PropTypes.number.isRequired
};

export default Counter;