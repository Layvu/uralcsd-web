import { combineReducers } from 'redux';
import teamReducer from '../slices/teamSlice';
import performancesReducer from '../slices/performancesSlice';
import projectsReducer from '../slices/projectsSlice';

const rootReducer = combineReducers({
    team: teamReducer,
    performances: performancesReducer,
    projects: projectsReducer,
});

export default rootReducer;
