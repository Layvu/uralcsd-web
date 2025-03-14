import { combineReducers } from 'redux';
import teamReducer from '../slices/teamSlice';
import performancesReducer from '../slices/performancesSlice';
import projectsReducer from '../slices/projectsSlice';
import theaterReducer from '../slices/theaterSlice';

const rootReducer = combineReducers({
    team: teamReducer,
    performances: performancesReducer,
    projects: projectsReducer,
    theater: theaterReducer,
});

export default rootReducer;
