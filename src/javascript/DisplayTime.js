import React from 'react';
import '../css/DisplayTime.css';

class DisplayTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString("en-GB")
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }

    render() {
        return (
            <div className="DisplayTime">
                <div>{this.state.time}</div>
            </div>
        );
    }
}

export default DisplayTime;