import React, { Component } from "react";
import "./App.css";
import axios from "axios";

console.log("inside onepet.js");

class OnePet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: {
        name: "",
        type: "",
        description: "",
        skill_1: "",
        skill_2: "",
        skill_3: "",
        likes: 0
      }
    };
  }
  componentDidMount() {
    let _id = this.props.match.params._id;
    axios.get(`/api/pets/view/${_id}`)
      .then(res => {
        console.log(res);
        this.setState({ pet: res.data });
      })
      .catch(err => console.log(err));
  }
  addALike = e => {
    e.preventDefault();
    document.querySelector("#likeButton").disabled = true; 
    let _id = this.props.match.params._id;
    this.state.pet.likes = this.state.pet.likes + 1; 
    axios.put(`/api/pets/edit/${_id}`, this.state.pet)
      .then(res => {
        axios.get(`/api/pets/view/${_id}`)
        .then(res => {
          console.log(res);
          this.setState({ pet: res.data });
        })
        .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  adoptPet = e =>{
      e.preventDefault();
      let _id = this.props.match.params._id;
      axios.delete(`/api/pets/delete/${_id}`)
        .then(res =>{
            console.log(res);
            this.props.history.push("/")
        })
        .catch(err => console.log(err));
  }

  render() {
    return (
      <div class="container">
        <h2> Details about {this.state.pet.name}</h2>
        <div className="table">
          <tbody>
            <tr>
              <th>Pet Type:</th>
              <td>{this.state.pet.type}</td>
            </tr>
            <tr>
              <th>Description:</th>
              <td>{this.state.pet.description}</td>
            </tr>
            <tr>
              <th>Skills:</th>
              <td>
                {this.state.pet.skill_1}
                <br />
                <br />
                {this.state.pet.skill_2}
                <br />
                <br />
                {this.state.pet.skill_3}
              </td>
            </tr>
            <tr>
              <th>Likes:</th>
              <td>{this.state.pet.likes}</td>
            </tr>
          </tbody>
          <button id="likeButton" className="btn btn-primary" onClick={this.addALike.bind(this)}>Like this pet</button>
          &nbsp;|&nbsp;
          <button className="btn btn-secondary" onClick={this.adoptPet.bind(this)}>Adopt this Pet</button>
        </div>
      </div>
    );
  }
}
export default OnePet;
