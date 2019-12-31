import { combineReducers } from 'redux';
import watchListReducer from './watchListReducer'


const rootReducer = () => combineReducers({
   watchListReducer
});

export default rootReducer;