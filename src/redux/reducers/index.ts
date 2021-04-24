import {combineReducers} from 'redux';

import eventsReducer from './events-reducer/events-reducer';

// import driverReducer from "./driver-reducers/driver-reducer";
// import driverCollectionReducer from "./driver-reducers/driverCollection-reducers";

let rootReducer;
export default rootReducer = combineReducers(
  Object.assign({
    events: eventsReducer,

    // driver: driverReducer,
    // driverCollection: driverCollectionReducer,
  }),
);
