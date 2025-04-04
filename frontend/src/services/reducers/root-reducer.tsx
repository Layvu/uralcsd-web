import { combineReducers } from 'redux';
import teamReducer from '../slices/teamSlice';
import performancesReducer from '../slices/performancesSlice';
import projectsReducer from '../slices/projectsSlice';
import theaterReducer from '../slices/theaterSlice';
import contactsReducer from '../slices/contactsSlice';

const rootReducer = combineReducers({
    team: teamReducer,
    performances: performancesReducer,
    projects: projectsReducer,
    theater: theaterReducer,
    contacts: contactsReducer,
});

export default rootReducer;
