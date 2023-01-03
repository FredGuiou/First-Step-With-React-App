import { useEffect, useState } from "react";

let timerId;

function Clock() {

    const [clock, setClock] = useState(new Date());

    //S'execute à chaque fois que le composant est monté.
    useEffect(() => {
        //Le setInterval permet de avec setClock de rafraichir toute les secondes 1000 le state du composant clock
        timerId = setInterval(() => {
            setClock(new Date());
        }, 1000);

        //Dans le useEffect il est possible d'utiliser un return qui renvoie une fonction anonyme.
        //Dans le cas présent on cherche à démonter le composant et à se désabonner du setInterval.
        return () => {
            clearInterval(timerId);
        }
    }, []); //Tableau des dépendances qui permet d'observer le changement de valeurs dans le state

    return (
        <p>It is {clock.toLocaleTimeString()}</p>
    );

}

export default Clock;




// import { Component } from "react";

// class Clock extends Component{

//     constructor(props) {
//         super(props);
//         this.state = {
//             date: new Date(),
//         };
//     };

//     componentDidMount() {
//         this.timerId = setInterval(() => {
//                 this.setState((state, props) => {
//                     return {
//                         date: new Date(),
//                     };
//                 });
//             }, 1000);
//     };

//     componentDidUpdate() {

//     };

//     componentWillUnmount() {
//         clearInterval(this.timerId);
//     };

//     render(){
//         return (
//             <p>It is {this.state.date.toLocaleTimeString()}</p>
//         );
//     };
// };

// export default Clock;