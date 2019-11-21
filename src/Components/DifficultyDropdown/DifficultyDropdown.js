import React, { Component } from 'react';
import { connect } from 'react-redux';

class DifficultyDropdown extends Component {

    componentDidMount(){
        this.props.dispatch({
            type: 'FETCH_DIFFICULTY'
        });
    }

    render() {

        const renderDifficultyDropdown = this.props.difficulty.map((level)=>{
            return (<option key={level.id} value={level.id}>{level.difficulty}</option>);
        })

        return (
            <select title="Select difficulty level here" onChange={(event) => { this.props.handleInput(event, 'difficulty_id') }} value={this.props.selectedDifficulty}>
                <option value={0}>Select a difficulty level</option>
                {renderDifficultyDropdown}
            </select>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        difficulty: store.difficultyReducer
    }
}

export default connect(mapStateToProps)(DifficultyDropdown);