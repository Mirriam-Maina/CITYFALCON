import { getWatchListRequest,getWatchListSuccess, getWatchListFailure, watchListTypes } from '../watchlistActions';


describe('test watchlist actions', () => {

    it('should call getWatchListRequest action', ()=>{
        const expectedAction = {
            type: watchListTypes.GET_WATCHLIST_REQUEST
        }
    
        expect(getWatchListRequest()).toEqual(expectedAction);
    })


    it('should call getWatchListSuccess action', ()=>{
        const response = [];
        const expectedAction = {
            type: watchListTypes.GET_WATCHLIST_SUCCESS,
            response
        }

        expect(getWatchListSuccess(response)).toEqual(expectedAction);
    })

    it('should call getWatchlistFailure action', () => {
        const response = 'error';
        const expectedAction = {
            type: watchListTypes.GET_WATCHLIST_FAILURE,
            response
        }
        expect(getWatchListFailure(response)).toEqual(expectedAction);
    })
    
});
