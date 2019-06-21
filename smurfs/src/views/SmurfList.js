import React from 'react'
import {connect} from 'react-redux'
import {fetchSmurfs} from '../actions'

class SmurfList extends React.Component{
    state = {}

    componentDidMount(){
        this.props.fetchSmurfs()
    }

    render(){
        console.log(this.props.smurfs)
        return (
            <div>
                {this.props.smurfs.map(smurf => <Smurf smurf={smurf} /> )}
            </div>
        )
    }
}

const mapStateToProps = ({smurfs, fetchingSmurfs}) => {
    return {
        smurfs,
        fetchingSmurfs
    }

}
export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);