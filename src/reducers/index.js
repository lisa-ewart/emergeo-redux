import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import servicesReducer from './servicesReducer';

const rootReducers = combineReducers({

    profile: profileReducer,
    services: servicesReducer,
});

export default rootReducers;
