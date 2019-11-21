import React, { Component } from 'react';
import { connect } from 'react-redux';

class PriceDropdown extends Component {

    componentDidMount(){
        this.props.dispatch({
            type: 'FETCH_PRICES'
        });
    }

    render() {

        const renderPriceDropdown = this.props.prices.map((range)=>{
            return (<option key={range.id} value={range.id}>{range.price}</option>);
        })

        return (
            <select title="Select price range here" onChange={(event) => { this.props.handleInput(event, 'price_id') }} value={this.props.selectedPrice}>
                <option value={0}>Select a price range</option>
                {renderPriceDropdown}
            </select>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        prices: store.priceReducer
    }
}

export default connect(mapStateToProps)(PriceDropdown);