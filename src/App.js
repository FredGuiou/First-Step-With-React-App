import { Component, Fragment } from "react";
import Button from "./Button";
import Clock from "./Clock";
import Title from "./Title";
import style from './App.module.css';
import profilePicture from './profile.jpg';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isClockVisible: false,
      users: [
        {
          id: 0,
          name: 'John',
          description: 'Labore et culpa duis esse cillum id nostrud magna proident ullamco voluptate.'
        },
        {
          id: 1,
          name: 'Jimmy',
          description: 'Labore et culpa duis esse cillum id nostrud magna proident ullamco voluptate.'
        },
        {
          id: 2,
          name: 'James',
          description: 'Labore et culpa duis esse cillum id nostrud magna proident ullamco voluptate.'
        },
        {
          id: 3,
          name: 'Carl',
          description: 'Labore et culpa duis esse cillum id nostrud magna proident ullamco voluptate.'
        },
        {
          id: 4,
          name: 'Rick',
          description: 'Labore et culpa duis esse cillum id nostrud magna proident ullamco voluptate.'
        },
        {
          id: 5,
          name: 'Mack',
          description: 'Labore et culpa duis esse cillum id nostrud magna proident ullamco voluptate.'
        },
      ],
    };
  };

  handleDisplayClock = () => {
    //Mise à jour de l'état d'affichage de l'horloge
    this.setState((state) => {
      return {
        isClockVisible: !state.isClockVisible,
      };
    });

  };

  render() {

    return (
      <div style={{margin: '3rem' }}>
        <Title>
          Hello World !
        </Title>
        <h2 className={ `${style.title}` }>Clock</h2>
        {this.state.isClockVisible && <Clock />}
        <Button onClick={this.handleDisplayClock}>Display Clock !</Button>
        <h2 className={ style.title }>Users</h2>
        <dl style={{ marginBottom: 20, border: 1, borderColor: 'black', borderStyle: 'solid', padding: 20 }}>
          {
            this.state.users.map(user => {
              return (
                <Fragment key={ user.id }>
                    <dt style={{ color: '#21618C', fontWeight: 'bold' }}>{user.name}</dt>
                    <dd>{user.description}</dd>
                </Fragment>
              );
            })
          }
        </dl>
        <h2 className={ `${style.title}` }>My profile </h2>
        <img src= { `${profilePicture}` } alt="Mon profil" height={150} width={150} style={{ borderRadius: '100%'}} />
      </div>
    );
  };
};

export default App;