
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
  Link
} from 'react-router-dom';

console.log("inside allpets.js");

class AllPets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      ascending: null
    }
  }

  componentDidMount() {
    axios.get("/api/pets")
      .then(res => this.setState({pets: res.data}))
      .catch(err => console.log(err));
  }

  sortPets = e =>{
      e.preventDefault();
      if(this.state.ascending) {
        const temp = [...this.state.pets].sort((a, b)=> {
            if(a.type < b.type) {
                return -1;
            }
            if(a.type > b.type) {
                return 1; 
            }
            return 0;
          });
          this.state.ascending = false; 
          this.setState({pets: temp.reverse()});
      } else {
          const temp = [...this.state.pets].sort((a, b)=> {
            if(a.type < b.type) {
                return -1;
            }
            if(a.type > b.type) {
                return 1; 
            }
            return 0;
          });
          this.state.ascending = true; 
          this.setState({pets: temp});
      }

  }

  render() {
    return (
      <table className="table">
        <tbody>
          <tr>
            <th>Name</th>
            <th onClick={this.sortPets}>Type</th>
            <th>Actions</th>
          </tr>
          {
            // to display all pets 
            this.state.pets.map(p =>
              <tr key={p._id}>
                <td><strong>{p.name}</strong></td>
                <td>{p.type}</td>
                <td>
                <Link to={"/pets/view/" + p._id}>
                    <button className="btn btn-secondary">Details</button>
                  </Link>
                  &nbsp;|&nbsp;
                  <Link to={"pets/edit/" + p._id}>
                    <button className="btn btn-success">Edit</button>
                  </Link>
                </td>
              </tr>
            )
          }
          
        </tbody>
      </table>
    );
  }
}

export default AllPets;