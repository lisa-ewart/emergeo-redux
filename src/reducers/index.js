import { combineReducers } from 'redux';
import userProfiles from './userProfiles';

export default combineReducers({

    profiles: userProfiles
})