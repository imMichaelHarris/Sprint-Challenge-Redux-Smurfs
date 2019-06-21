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
                <input type="text" name="name" value={this.state.newSmurf.name} onChange={this.handleChanges} />
                <input type="number" name="age" value={this.state.newSmurf.age} onChange={this.handleChanges} />
                <input type="number" name="height" value={this.state.newSmurf.height} onChange={this.handleChanges} />

            </form>
        </div>
    }
}