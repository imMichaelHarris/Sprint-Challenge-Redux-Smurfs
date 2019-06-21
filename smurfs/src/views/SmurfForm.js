import React from 'react'

class SmurfForm extends React.Component {
    state = {
        newSmurf: {
            name: '',
            age: '',
            height: ''
        }
    }

    render(){
        <div>
            <form>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChanges} />
            </form>
        </div>
    }
}