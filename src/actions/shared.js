import { getInitialData } from '../utils/API'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'

export function handleInidialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, tweets }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveTweets(tweets))
            })
    }
}