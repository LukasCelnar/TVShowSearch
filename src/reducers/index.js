import { combineReducers } from 'redux';
import inputValueReducer from './inputValueReducer';
import selectedShowReducer from './selectedShowReducer';

export default combineReducers({
    inputValue: inputValueReducer,
    selectedShow: selectedShowReducer
})