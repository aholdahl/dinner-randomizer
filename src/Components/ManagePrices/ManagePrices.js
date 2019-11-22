import React, { Component } from 'react';
import { connect } from 'react-redux';
import PriceItem from './PriceItem.js';

class ManagePrices extends Component {

    state = {
        price: ''
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_PRICES'
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
            type: 'ADD_NEW_PRICE',
            payload: { price: this.state.price }
        })
        this.setState({
            ...this.state,
            [property]: ''
        });
    }

    render() {
        return (
            <>
                <h3>Price Ranges</h3>
                <input title="Type new price option here" placeholder="Enter new price range" type="text" onChange={(event) => { this.handleChange(event, 'price') }} value={this.state.price} />
                <button onClick={() => { this.handleSubmit('price') }}>Add New Price</button>
                <table>
                    <thead>
                        <tr>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.price.map((price) => {
                            return (
                                <PriceItem price={price} />
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
        price: store.priceReducer
    }
}

export default connect(mapStateToProps)(ManagePrices);