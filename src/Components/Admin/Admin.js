import React, { Component } from 'react';
import ManageDishes from '../ManageDishes/ManageDishes.js';
import ManageRestaurants from '../ManageRestaurants/ManageRestaurants.js';
import ManageCategories from '../ManageCategories/ManageCategories.js';
import ManageDifficulty from '../ManageDifficulty/ManageDifficulty.js';
import ManageIngredients from '../ManageIngredients/ManageIngredients.js';
import ManagePrices from '../ManagePrices/ManagePrices.js';

class Admin extends Component {

    render() {
        return (
            <>
                <h2>Manage Options</h2>
                <ManageCategories />
                <ManageDifficulty />
                <ManageIngredients />
                <ManagePrices />
                <ManageDishes />
                <ManageRestaurants />
            </>
        );
    }
}

export default Admin;