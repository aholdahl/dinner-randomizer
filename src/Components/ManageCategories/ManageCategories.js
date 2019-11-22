import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryItem from './CategoryItem.js';

class ManageCategories extends Component {

    state = {
        category: ''
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_CATEGORIES'
        });
    }

    handleChange = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        });
    }

    handleSubmit = (property) => {
            this.props.dispatch({
                type: 'ADD_NEW_CATEGORY',
                payload: { category: this.state.category }
            })
        this.setState({
            ...this.state,
            [property]: ''
        });
    }

    render() {
        return (
            <>
                <h3>Categories</h3>
                <input title="Type new category option here" placeholder="Enter new category label" type="text" onChange={(event) => { this.handleChange(event, 'category') }} value={this.state.category} />
                <button onClick={() => { this.handleSubmit('category') }}>Add New Category</button>
                <table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.categories.map((category) => {
                            return (
                                <CategoryItem category={category}/>
                            )
                        })}
                    </tbody>
                </table>
                <hr />
            </>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        categories: store.categoryReducer
    }
}

export default connect(mapStateToProps)(ManageCategories);