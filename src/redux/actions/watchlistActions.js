export const watchListTypes = {
    GET_WATCHLIST_REQUEST: 'GET_WATCHLIST_REQUEST',
    GET_WATCHLIST_SUCCESS: 'GET_WATCHLIST_SUCCESS',
    GET_WATCHLIST_FAILURE: 'GET_WATCH_LIST_FAILURE'
}


export const getWatchListRequest = () => {
    return {
        type: watchListTypes.GET_WATCHLIST_REQUEST
    }
}

export const getWatchListSuccess = (response) => {
    return {
        type: watchListTypes.GET_WATCHLIST_SUCCESS,
        response
    }
}

export const getWatchListFailure = (response) => {
    return {
        type: watchListTypes.GET_WATCHLIST_FAILURE,
        response
    }
}