import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {updateUser} from './actions/userActions';

class App extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser=this.onUpdateUser.bind(this);
  }
   
  onUpdateUser(e){
    this.props.updateUser(e.target.value);
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>{this.props.user}</div>
        <input onChange={this.onUpdateUser}></input>       
      </div>
    );
  }
}

const mapStateToProps= state =>{
  return state;
}

const mapActionToProps={
  updateUser: updateUser
}

export default connect(mapStateToProps, mapActionToProps)(App);