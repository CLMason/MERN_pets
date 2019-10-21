// editing existing movies 
import React, { Component } from 'react';
import axios from 'axios';
import {
  Link
} from 'react-router-dom';

console.log("in edit.js file");

class EditPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: {
        name: "",
        type: "",
        description: "",
        skill_1: "",
        skill_2: "",
        skill_3: ""
      }, 
      errors: {
        name: "",
        type: "",
        description: "",
        skill_1: "",
        skill_2: "",
        skill_3: ""
      }
    }
  }

  componentDidMount() {
    let _id = this.props.match.params._id;
    axios.get(`api/pets/edit/${_id}`)
      .then(res => {
        console.log(res);
        this.setState({pet: res.data});
      })
      .catch(err => console.log(err));
  }

  changeName = e => {
    let pet = {...this.state.pet};
    pet.name = e.target.value;
    this.setState({pet: pet});
  }
  changeType = e => {
    let pet = {...this.state.pet};
    pet.type = e.target.value;
    this.setState({pet: pet});
  }
  changeDescription = e => {
    let pet = {...this.state.pet};
    pet.description = e.target.value;
    this.setState({pet: pet});
  }
  changeSkill_1 = e => {
    let pet = {...this.state.pet};
    pet.skill_1 = e.target.value;
    this.setState({pet: pet});
  }
  changeSkill_2 = e => {
    let pet = {...this.state.pet};
    pet.skill_2 = e.target.value;
    this.setState({pet: pet});
  }
  changeSkill_3 = e => {
    let pet = {...this.state.pet};
    pet.skill_3 = e.target.value;
    this.setState({pet: pet});
  }

  updatePet = e => {
    e.preventDefault();
    let _id = this.props.match.params._id;
    axios.put(`api/pets/edit/${_id}`, this.state.pet)
      .then(res => {
        if(res.data.errors) {
          this.setState({errors: res.data.errors});
        } else {
          this.props.history.push("/")
        }
      })
      .catch(err => console.log(err));

  }

  render() {
    return (
      <form onSubmit={this.updatePet}>
        <h2>Edit this pet </h2>
        <div className="form-group" >
          <input 
            className="form-control"
            type="text" 
            placeholder="Name" 
            onChange={this.changeName} 
            value={this.state.pet.name} 
          />
          {
            this.state.errors.name ?
            <span>{this.state.errors.name.message}</span> :
            ""
          }
          <br/>
          <input
            className="form-control" 
            type="text" 
            placeholder="Type" 
            onChange={this.changeType} 
            value={this.state.pet.type}
          />
          {
            this.state.errors.type ?
            <span>{this.state.errors.type.message}</span> :
            ""
          }
          <br/>
          <textarea
            className="form-control"
            placeholder="Description" 
            onChange={this.changeDescription} 
            value={this.state.pet.description}
          />
          {
            this.state.errors.description ?
            <span>{this.state.errors.description.message}</span> :
            ""
          }
          <br/>
          <h2>Skills (optional)</h2>
          <input
            className="form-control"
            type="text" 
            placeholder="Skill 1" 
            onChange={this.changeSkill_1} 
            value={this.state.pet.skill_1}
          />
          <br />
          <input
            className="form-control"
            type="text" 
            placeholder="Skill 2" 
            onChange={this.changeSkill_2} 
            value={this.state.pet.skill_2}
          />
          <br />
          <input
            className="form-control"
            type="text" 
            placeholder="Skill 3" 
            onChange={this.changeSkill_3} 
            value={this.state.pet.skill_3}
          />
          <br />
          <input type="submit" className="btn btn-warning" value="Edit Pet" />
          &nbsp;|&nbsp;
          <Link to={"/"}>
              <button className="btn btn-danger">Cancel</button>
            </Link>
        </div>
      </form>
    );
  }
}

export default EditPet;