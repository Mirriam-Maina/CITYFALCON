import { watchListTypes } from '../actions/watchlistActions';

const initialState = {
    loading: true,
    error: '',
    watchlist: []
};


const watchListReducer = (state = { ...initialState }, action) => {

    switch (action.type) {

        case (watchListTypes.GET_WATCHLIST_SUCCESS):
            return {
                ...initialState,
                loading: false,
                watchlist: action.response
            }

        case (watchListTypes.GET_WATCHLIST_FAILURE):
            return {
                ...initialState,
                loading: false,
                error: action.response
            }
        default:
            return initialState;
    }
}

export default watchListReducer;




