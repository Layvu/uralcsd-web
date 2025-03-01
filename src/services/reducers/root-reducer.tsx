import { combineReducers } from 'redux';
import teamReducer from '../slices/teamSlice';
import performancesReducer from '../slices/performancesSlice';

const rootReducer = combineReducers({
    team: teamReducer,
    performances: performancesReducer,
});

export default rootReducer;
