import { RECEIVE_TWEETS } from '../actions/tweets'

/* == REDUCER FUNCTION == */
export default function tweets(state = {}, action) {
    switch (action.type) {
        case RECEIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        default:
            return state
    }
}
// ---> END REDUCER FUNCTION <---