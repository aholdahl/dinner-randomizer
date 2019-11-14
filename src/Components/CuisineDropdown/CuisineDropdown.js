import React, { Component } from 'react';
import { connect } from 'react-redux';

class CuisineDropdown extends Component {

    componentDidMount(){
        this.props.dispatch({
            type: 'FETCH_CUISINES'
        });
    }

    render() {

        const renderCuisineDropdown = this.props.cuisine.map((type)=>{
            return (<option key={type.id} value={type.id}>{type.cuisine}</option>)
        })

        return (
            <select title="Select cuisine type here" onChange={(event) => { this.props.handleInput(event, 'cuisine') }} value={this.props.selectedCuisine}>
                <option value={0}>Select a cuisine</option>
                {renderCuisineDropdown}
            </select>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        cuisine: store.cuisineReducer
    }
}

export default connect(mapStateToProps)(CuisineDropdown);