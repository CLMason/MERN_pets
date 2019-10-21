import React, { Component } from 'react';
import axios from 'axios';
import {
  Link
} from 'react-router-dom';

console.log("inside newpet.js");

class New extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // we can store the form data as we're filling it out in state
      newPet: {
        name: "",
        type: "",
        description: "",
        skill_1: "",
        skill_2: "",
        skill_3:""
      }, 
      // create errors object
      errors: {
          name: "",
          type: "",
          description: "",
      }
    }
  }
  addPet = e =>{
    e.preventDefault();
    console.log(this.state.newPet);
    axios.post("http://localhost:8000/api/pets/new", this.state.newPet)
      .then(res =>{
        console.log(res);
        if(res.data.errors) {
          this.setState({errors: res.data.errors});
        } else {
          this.props.history.push("/");
        }
      })
      .catch(err =>{
        console.log(err);
      });
  }
  changeName = e => {
    let newPet = {...this.state.newPet};
    newPet.name = e.target.value;
    this.setState({newPet: newPet});
  }
  changeType = e => {
    let newPet = {...this.state.newPet};
    newPet.type = e.target.value;
    this.setState({newPet: newPet});
  }
  changeDescription = e => {
    let newPet = {...this.state.newPet};
    newPet.description = e.target.value;
    this.setState({newPet: newPet});
  }
  changeSkill_1 = e => {
    let newPet = {...this.state.newPet};
    newPet.skill_1 = e.target.value;
    this.setState({newPet: newPet});
  }
  changeSkill_2 = e => {
    let newPet = {...this.state.newPet};
    newPet.skill_2 = e.target.value;
    this.setState({newPet: newPet});
  }
  changeSkill_3 = e => {
    let newPet = {...this.state.newPet};
    newPet.skill_3 = e.target.value;
    this.setState({newPet: newPet});
  }
  render(){
    return (
      <div className="container">
        <form onSubmit ={this.addPet}>
          <div className="form-group">
            <h4>Name:</h4>
              <input 
                className="form-control"
                type ="text"
                placeholder ="Name"
                onChange={this.changeName}
                
              />
            {
              this.state.errors.name ?
              <span>{this.state.errors.name.message}</span> :
              ""
            }
            <br/>
            <h4>Type:</h4>
              <input 
                className="form-control"
                type="text" 
                placeholder="Type" 
                onChange={this.changeType} 
                value={this.state.newPet.type}
              />
              {
                this.state.errors.type ?
                <span>{this.state.errors.type.message}</span> :
                ""
              }
            <br/>
            <h4>Description:</h4>
              <input 
                className="form-control"
                type="text" 
                placeholder="Description" 
                onChange={this.changeDescription} 
                value={this.state.newPet.description}
              />
              {
                this.state.errors.description ?
                <span>{this.state.errors.description.message}</span> :
                ""
              }
            <br/>
            <h4>Skills (optional)</h4>
              <input 
                className="form-control"
                type="text" 
                placeholder="Skill 1" 
                onChange={this.changeSkill_1} 
                value={this.state.newPet.skill_1}
              />
            <br/>
            <input 
                className="form-control"
                type="text" 
                placeholder="Skill 2" 
                onChange={this.changeSkill_2} 
                value={this.state.newPet.skill_2}
              />
            <br/>
            <input 
                className="form-control"
                type="text" 
                placeholder="Skill 3" 
                onChange={this.changeSkill_3} 
                value={this.state.newPet.skill_3}
              />
            <br/>
            <input className="btn btn-warning" type="submit" />
            &nbsp;|&nbsp;
            <Link to={"/"}>
              <button className="btn btn-danger">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default New;