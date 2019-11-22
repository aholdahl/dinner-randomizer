import React, { Component } from 'react';
import { connect } from 'react-redux';

class IngredientItem extends Component {
    state = {
        editMode: false,
        ingredient: ''
    }

    toggleEditMode = () => {
        this.setState({
            ...this.state,
            editMode: !this.state.editMode,
            ingredient: this.props.ingredient.ingredient
        })
    }

    setChanges = (event) => {
        this.setState({
            ...this.state,
            ingredient: event.target.value
        })
    }

    updateIngredient = () => {
        this.props.dispatch({
            type: 'UPDATE_INGREDIENT',
            payload: {
                ingredient: this.state.ingredient,
                id: this.props.ingredient.id
            }
        })
        this.toggleEditMode();
    }

    deleteIngredient = () => {
        this.props.dispatch({
            type: 'DELETE_INGREDIENT',
            payload: {
                id: this.props.ingredient.id
            }
        })
    }

    render() {
        return (
            <>
                {this.state.editMode ?
                    <tr key={this.props.ingredient.id} >
                        <td><input value={this.state.ingredient} onChange={this.setChanges} /></td>
                        <td><button onClick={this.updateIngredient}>Save</button></td>
                        <td><button onClick={this.deleteIngredient}>Delete</button></td>
                    </tr >
                    :
                    <tr key={this.props.ingredient.id}>
                        <td>{this.props.ingredient.ingredient}</td>
                        <td><button onClick={this.toggleEditMode}>Edit</button></td>
                        <td><button onClick={this.deleteIngredient}>Delete</button></td>
                    </tr>
                }
            </>
        )
    }
}

export default connect()(IngredientItem);