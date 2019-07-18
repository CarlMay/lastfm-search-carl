import {combineReducers} from "redux";
import {reducer as formReducer}  from 'redux-form';
import mindzReducer from './mindz-reducer';

export default combineReducers({
    mindz: mindzReducer,
    form: formReducer,
});