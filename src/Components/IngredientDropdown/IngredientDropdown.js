import React, { Component } from 'react';
import { connect } from 'react-redux';

class IngredientDropdown extends Component {

    componentDidMount(){
        this.props.dispatch({
            type: 'FETCH_INGREDIENTS'
        });
    }

    render() {

        const renderIngredientDropdown = this.props.ingredients.map((item)=>{
            return (<option key={item.id} value={item.id}>{item.ingredient}</option>)
        })

        return (
            <select title="Select ingredient here" onChange={(event) => { this.props.handleInput(event, 'ingredient_id') }} value={this.props.selectedIngredient}>
                <option value={0}>Select an ingredient</option>
                {renderIngredientDropdown}
            </select>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        ingredients: store.ingredientReducer
    }
}

export default connect(mapStateToProps)(IngredientDropdown);