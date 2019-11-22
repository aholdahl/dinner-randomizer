import React, { Component } from 'react';
import { connect } from 'react-redux';
import DifficultyItem from './DifficultyItem.js';

class ManageDifficulty extends Component {

    state = {
        difficulty: ''
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_DIFFICULTY'
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
            type: 'ADD_NEW_DIFFICULTY',
            payload: { difficulty: this.state.difficulty }
        })
        this.setState({
            ...this.state,
            [property]: ''
        });
    }

    render() {
        return (
            <>
                <h3>Difficulty Levels</h3>
                <input title="Type new difficulty option here" placeholder="Enter new difficulty level" type="text" onChange={(event) => { this.handleChange(event, 'difficulty') }} value={this.state.difficulty} />
                <button onClick={() => { this.handleSubmit('difficulty') }}>Add New Difficulty</button>
                <table>
                    <thead>
                        <tr>
                            <th>Difficulty</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.difficulty.map((difficulty) => {
                            return (
                                <DifficultyItem difficulty={difficulty} />
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
        difficulty: store.difficultyReducer
    }
}

export default connect(mapStateToProps)(ManageDifficulty);