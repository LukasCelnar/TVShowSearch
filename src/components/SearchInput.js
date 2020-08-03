import React from 'react';
import { connect } from 'react-redux';
import { setInputValue } from '../actions';
import './SearchInput.css';

class SearchInput extends React.Component {

    fetchTVShows(e) {
        this.props.setInputValue(e.target.value)
    }

    render() {
        return (
            <div className="ui icon input shows_list__input-container">
                <input onChange={(e) => this.fetchTVShows(e)} id="shows_list__input" type="text" placeholder="Search TV Shows..." />
                <i className="search icon"></i>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { inputValue: state.inputValue }
}

export default connect(mapStateToProps, { setInputValue })(SearchInput);