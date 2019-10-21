import React, { Component } from 'react';
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import AllPets from './AllPets';
import NewPet from './NewPet';
import EditPet from './EditPet';
import OnePet from './OnePet';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

console.log("inside app.js");

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <h1 className="jumbotron text-center">Pet Shelter</h1>
          {/* This is our Navigation Menu*/}
          <ul>
              <Link to="/">
                <button className="btn btn-primary">All Pets</button>
              </Link>
              &nbsp;|&nbsp;
              <Link to="/pets/new">
                <button className="btn btn-info">Add a Pet to the Shelter</button>
              </Link>
          </ul>
          <Route exact path="/" component={AllPets} />
          <Route path="/pets/new" component={NewPet} />
          <Route path="/pets/edit/:_id" component={EditPet} /> 
          <Route path="/pets/view/:_id" component={OnePet} /> 
        </BrowserRouter>
        </div>
    );
  }
}
export default App;