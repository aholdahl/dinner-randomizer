import React, { Component } from 'react';
import { connect } from 'react-redux';

class CategoryItem extends Component {
    state = {
        editMode: false,
        category: ''
    }

    toggleEditMode = ()=>{
        this.setState({
            ...this.state,
            editMode: !this.state.editMode,
            category: this.props.category.category
        })
    }

    setChanges = (event)=>{
        this.setState({
            ...this.state,
            category: event.target.value
        })
    }

    updateCategory = ()=>{
        this.props.dispatch({
            type: 'UPDATE_CATEGORY',
            payload: {
                category: this.state.category,
                id: this.props.category.id
            }
        })
        this.toggleEditMode();
    }

    deleteCategory = ()=>{
        this.props.dispatch({
            type: 'DELETE_CATEGORY',
            payload: {
                id: this.props.category.id
            }
        })
    }

    render (){
        return (
            <>
                {this.state.editMode ?
                    <tr key={this.props.category.id} >
                        <td><input value={this.state.category} onChange={this.setChanges}/></td>
                        <td><button onClick={this.updateCategory}>Save</button></td>
                        <td><button onClick={this.deleteCategory}>Delete</button></td>
                    </tr >
                    :
                    <tr key={this.props.category.id}>
                        <td>{this.props.category.category}</td>
                        <td><button onClick={this.toggleEditMode}>Edit</button></td>
                        <td><button onClick={this.deleteCategory}>Delete</button></td>
                    </tr>
                }
            </>
        )
    }
}

export default connect()(CategoryItem);