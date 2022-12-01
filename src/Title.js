import { Component } from "react";
import style from './Title.module.css';

class Title extends Component {

    render() {
        return (
            <h1 className={ `${ style.title }` }>{ this.props.children }</h1>
        );
    };
};

export default Title;