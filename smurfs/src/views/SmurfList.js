import React from 'react'
import {connect} from 'react-redux'
import {fetchSmurfs} from '../actions'

class SmurfList extends React.Component{
    state = {}

    componentDidMount(){
        this.props.fetchSmurfs()
    }

    render(){
        return <h1>SmurfList</h1>
    }
}

const mapStateToProps = ({smurfs, fetchingSmurfs}) => {
    return {
        smurfs,
        fetchingSmurfs
    }

}
export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);