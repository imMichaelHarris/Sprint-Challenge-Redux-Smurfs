import React from 'react'
import {connect} from 'react-redux'

class SmurfList extends React.Component{
    state = {}

    render(){
        return <h1>SmurfList</h1>
    }
}

export default connect(null, {})(SmurfList);