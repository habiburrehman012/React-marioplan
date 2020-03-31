import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore'; //Syncing our firestore data with our state in background

const rootReducer = combineReducers({
    auth:authReducer,
    project:projectReducer
});

export default rootReducer;