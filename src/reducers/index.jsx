import {combineReducers} from "redux";
import {reducer as formReducer}  from 'redux-form';
import mindzReducer from './mindz-reducer';
import lastFmReducer from './last-fm-reducer';

export default combineReducers({
    mindz: mindzReducer,
    lastFm: lastFmReducer,
    form: formReducer,
});