import {createStore, combineReducers} from 'redux';

import activeDialogReducer from './reducers/activeDialogReducer'
import profileReducer from './reducers/profileReducer';

let reducers = combineReducers({
    messages : activeDialogReducer,
    wall     : profileReducer
});

const store = createStore(reducers);

export default store;