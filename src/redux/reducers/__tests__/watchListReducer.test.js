import {getWatchListFailure, getWatchListSuccess, getWatchListRequest} from '../../actions/watchlistActions';
import watchListReducer from '../watchListReducer';

const initialState = {
    loading: true,
    error: '',
    watchlist: []
};
describe('test watchlist reducers', () => {

    it('tests the getWatchlistSuccess reducer', ()=>{
        const response = ["sth1", "sth2", "sth3"];

        const state = watchListReducer(initialState, getWatchListSuccess(response));
        const expectedState = {
            ...initialState,
            loading: false,
            watchlist: response
        }
        expect(state).toEqual(expectedState)
    })
    
    it('tests the getWatchlistFailure reducer', ()=>{
        const response = "an error occured";

        const state = watchListReducer(initialState, getWatchListFailure(response));
        const expectedState = {
            ...initialState,
            loading: false,
            error: response
        }
        expect(state).toEqual(expectedState)
    })
});
