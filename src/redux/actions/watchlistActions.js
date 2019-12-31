export const watchListTypes = {
    GET_WATCHLIST: 'GET_WATCH_LIST',
    GET_WATCHLIST_SUCCESS: 'GET_WATCHLIST_SUCCESS',
    GET_WATCHLIST_FAILURE: 'GET_WATCH_LIST_FAILURE'
}


export const getWatchList = (response) => {
    return{
        type: watchListTypes.GET_WATCHLIST,
        response
    }
}

export const getWatchListSuccess = (response) => {
    return{
        type: watchListTypes.GET_WATCHLIST_SUCCESS,
        response
    }
}

export const getWatchListFailure = (response) => {
    return{
        type: watchListTypes.GET_WATCHLIST_FAILURE,
        response
    }
}