export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'

/* == ACTION CREATORS == */
// 1. receiveTweets
export function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}
// ---> END ACTION CREATORS <---
