import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs, deleteSmurf, updateSmurf } from "../actions";

import Smurf from "../components/Smurf";

class SmurfList extends React.Component {
  state = {};

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="smurf-list">
        {this.props.smurfs.map(smurf => (
          <Smurf
            smurf={smurf}
            key={smurf.id}
            deleteSmurf={this.props.deleteSmurf}
            updateSmurf={this.props.updateSmurf}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs, fetchingSmurfs }) => {
  return {
    smurfs,
    fetchingSmurfs
  };
};
export default connect(
  mapStateToProps,
  { fetchSmurfs, deleteSmurf, updateSmurf }
)(SmurfList);
