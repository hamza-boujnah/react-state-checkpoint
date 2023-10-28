// eslint-disable-next-linen
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';



class App extends Component {
  state = {
    person: {
      fullName: 'Boujnah Hamza',
      bio: 'Boujnah Hamza was born in 11/09/1998, he started taking medicale assitance cources in 2021 and in the same year starts to work for an ambulance since than till now ',
      imgSrc: './src/assets/hamza.jpg', // You need to provide the correct image path
      profession: 'Medical Assistance',
    },
    show: true, // Initially set to true to display the profile
    mountTime: 0, // This will store the time since the component was mounted
  };
  //Add a button that allows you to toggle the show state
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountTime: prevState.mountTime + 1,
      }));
    }, 1000); // Update every second (1000 milliseconds)
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        {this.state.show && (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.profession}</p>
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
          </div>
        )}
        <button onClick={this.toggleShow}>Toggle Profile</button>
        <p>Time since mount: {this.state.mountTime} seconds</p>
      </div>
    );
  }
  
  
}

export default App;
