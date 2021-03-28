import React from 'react';
import '../css/DisplayTime.css';

let options = { dateStyle: 'long', timeStyle: 'medium' };
class DisplayTime extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString('en-GB', options)
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
            time: new Date().toLocaleString('en-GB', options)
        });
    }

    render() {
        return (
            <div className="DisplayTime">
                <div>{this.state.time} {Intl.DateTimeFormat().resolvedOptions().timeZone}</div>
            </div>
        );
    }
}

export default DisplayTime;