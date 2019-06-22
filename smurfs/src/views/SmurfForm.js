import React from "react";
import { connect } from "react-redux";
import { addSmurfToDb } from "../actions";

class SmurfForm extends React.Component {
  state = {
    newSmurf: this.props.newSmurf
  };

  handleChanges = e => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [e.target.name]: e.target.value
      }
    });
  };

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurfToDb(this.state.newSmurf);
  };

  render() {
    console.log(this.props.newSmurf);
    return (
      <div>
        <form onSubmit={this.addSmurf}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.newSmurf.name}
            onChange={this.handleChanges}
          />
          <label>Age:</label>

          <input
            type="number"
            name="age"
            value={this.state.newSmurf.age}
            onChange={this.handleChanges}
          />
          <label>Height:</label>

          <input
            type="number"
            name="height"
            value={this.state.newSmurf.height}
            onChange={this.handleChanges}
          />
          <button>Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newSmurf: state.formData
  };
};

export default connect(
  mapStateToProps,
  { addSmurfToDb }
)(SmurfForm);
