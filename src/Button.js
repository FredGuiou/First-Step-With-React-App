import { Component } from "react";
//On peut stocker dans une constante des propriétés CSS dans un objet qui peuvent modifier le state par la suite.
const defaultButtonStyle = {
    padding: '.5rem', 
    borderRadius: '.5rem', 
    cursor: 'pointer',
    color: 'white',
    backgroundColor: '#6C3483'
}

class Button extends Component {
//Le constructor récupère les props du composant (Ici Button) et de component(le parent importé de React) grâce à super().
//On initialise le state dans le constructor avec this.state
    constructor(props){
        super(props);
        this.state = {
            //On appelle le style du statte initial avec pour valeur de property la constante defaultButtonStyle (le style par défaut du boutton)
            style: defaultButtonStyle,
        };

    };

    handleMouseHover = (isHover) => {
        //Fonction conditionelle si Hover.
    if (isHover) {
        //Si isHover alors le state qui a pour argument paramètre style envoie une nouvelle valeur de style 
        this.setState(({ style }) =>{
            //J'utilise le destructuring pour récupérer uniquement la propriété style du state
            return {
                style: {
                    //J'utilise le spread operator pour modifier les valeurs de color et backgroundColor.
                    ...style,
                    color: '#6C3483',
                    backgroundColor: 'white'
                }
            };
        });
    } else {
        //Sinon le state est celui de départ 
        this.setState({
            style: defaultButtonStyle,
        });
    };        
};
//Render global de la classe Button qui retourne le JSX avec la props d'évènement onClick, la props styleet les bouléens pour les cas ou la souris est hover puis en sort.
//La props Children renvoie la valeur du JSX de Button dans l'élément parent APP.js
    render() {

        return (
            <button onClick={ this.props.onClick } 
                style={ this.state.style }
                onMouseOver={() => this.handleMouseHover(true) }
                onMouseLeave={() => this.handleMouseHover(false) }
            >
                { this.props.children }</button>
        );
    };
};

export default Button;