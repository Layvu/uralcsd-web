import { combineReducers } from 'redux';
import teamReducer from '../slices/teamSlice';
import performancesReducer from '../slices/performancesSlice';
import projectsReducer from '../slices/projectsSlice';
import theaterReducer from '../slices/theaterSlice';
import contactsReducer from '../slices/contactsSlice';
import performanceCastsReducer from '../slices/performanceCastsSlice';
import afishaItemsReduces from '../slices/afishaItemsSlice';

const rootReducer = combineReducers({
    team: teamReducer,
    performances: performancesReducer,
    projects: projectsReducer,
    theater: theaterReducer,
    contacts: contactsReducer,
    performanceCasts: performanceCastsReducer,
    afishaItems: afishaItemsReduces,
});

export default rootReducer;
