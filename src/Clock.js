import { Component } from "react";

class Clock extends Component{

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    };

    componentDidMount() {
        this.timerId = setInterval(() => {
                this.setState((state, props) => {
                    return {
                        date: new Date(),
                    };
                });
            }, 1000);
    };

    componentDidUpdate() {
        
    };

    componentWillUnmount() {
        clearInterval(this.timerId);
    };

    render(){
        return (
            <p>It is {this.state.date.toLocaleTimeString()}</p>
        );
    };
};

export default Clock;