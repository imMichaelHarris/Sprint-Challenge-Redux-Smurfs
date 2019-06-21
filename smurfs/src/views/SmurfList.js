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

export default connect(null, {fetchSmurfs})(SmurfList);