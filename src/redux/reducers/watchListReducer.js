import { watchListTypes } from '../actions/watchlistActions';

const initialState = {
    loading: false,
    error: '',
    watchlist: []
};


const watchListReducer = (state = initialState, action) => {

    switch(action.type){
        case(watchListTypes.GET_WATCHLIST):
            return {
                ...initialState,
                loading: true
            }

        case(watchListTypes.GET_WATCHLIST_SUCCESS):
            return {
                ...initialState,
                watchlist: action.response
            }

        case(watchListTypes.GET_WATCHLIST_FAILURE):
            return {
                ...initialState,
                error: action.response
            }
        default:
            return initialState;
    }
}

export default watchListReducer;




