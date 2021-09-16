import React from 'react';
import './App.css';
import myimage from './download.jpg'

class Profile extends React.Component {
constructor(props){
  super(props);
  this.state= {person:{
    counter: 0,
    name : 'sara Jones',
    profession :'doctor',
    Bio:'worked at NewYork-Presbyterian/Weill Cornell Medical Center',
    image: myimage
    
  } }}


  render() {
    return (
    <div>
    
    <img src={this.state.person.image} alt='animage'/>      
    <h3>full name : {this.state.person.name}</h3>
    <h3>profession : {this.state.person.profession}</h3>
    <p>Biography : {this.state.person.Bio}</p>
    
    

    
    </div>
    ) }
}

export default Profile;
