import React, { Component } from 'react';
import { connect } from 'react-redux';

class DifficultyItem extends Component {
    state = {
        editMode: false,
        difficulty: ''
    }

    toggleEditMode = () => {
        this.setState({
            ...this.state,
            editMode: !this.state.editMode,
            difficulty: this.props.difficulty.difficulty
        })
    }

    setChanges = (event) => {
        this.setState({
            ...this.state,
            difficulty: event.target.value
        })
    }

    updateDifficulty = () => {
        this.props.dispatch({
            type: 'UPDATE_DIFFICULTY',
            payload: {
                difficulty: this.state.difficulty,
                id: this.props.difficulty.id
            }
        })
        this.toggleEditMode();
    }

    deleteDifficulty = () => {
        this.props.dispatch({
            type: 'DELETE_DIFFICULTY',
            payload: {
                id: this.props.difficulty.id
            }
        })
    }

    render() {
        return (
            <>
                {this.state.editMode ?
                    <tr key={this.props.difficulty.id} >
                        <td><input value={this.state.difficulty} onChange={this.setChanges} /></td>
                        <td><button onClick={this.updateDifficulty}>Save</button></td>
                        <td><button onClick={this.deleteDifficulty}>Delete</button></td>
                    </tr >
                    :
                    <tr key={this.props.difficulty.id}>
                        <td>{this.props.difficulty.difficulty}</td>
                        <td><button onClick={this.toggleEditMode}>Edit</button></td>
                        <td><button onClick={this.deleteDifficulty}>Delete</button></td>
                    </tr>
                }
            </>
        )
    }
}

export default connect()(DifficultyItem);