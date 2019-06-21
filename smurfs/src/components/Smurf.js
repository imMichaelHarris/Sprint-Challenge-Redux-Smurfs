import React from 'react';

const Smurf = props => {
    const {name, age, height, id} = props.smurf
    return (
        <div className="smurf-card">
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
            <button onClick={() => props.deleteSmurf(id)}>Delete</button>
        </div>
    )
}

export default Smurf;