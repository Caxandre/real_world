import { saveLikeToggle } from '../utils/api'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'

/* == ACTION CREATORS == */
// 1. receiveTweets
export function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}

// 2. 
function toggleTweet({ id, authedUser, hasLiked }) {
    return {
        type: TOGGLE_TWEET,
        id,
        authedUser,
        hasLiked
    }
}

export function handleToggleTweet(info) {
    return (dispatch) => {
        dispatch(toggleTweet(info))

        return saveLikeToggle(info)
            .catch((e) => {
                console.warn('Error in handleToggleTweet: ', e)
                dispatch(toggleTweet(info))
                alert('There was an error liking the tweet. Try agian!')
            })
    }
}
// ---> END ACTION CREATORS <---
