import React, { Component } from 'react';
import { connect } from 'react-redux';

class CategoryDropdown extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_CATEGORIES'
        });
    }

    render() {

        const renderCategoryDropdown = this.props.category.map((type) => {
            return (<option key={type.id} value={type.id}>{type.category}</option>)
        })

        return (
            <select title="Select category here" onChange={(event) => { this.props.handleInput(event, 'category_id') }} value={this.props.selectedCategory}>
                <option value={0}>Select a category</option>
                {renderCategoryDropdown}
            </select>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        category: store.categoryReducer
    }
}

export default connect(mapStateToProps)(CategoryDropdown);