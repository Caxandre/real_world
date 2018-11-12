import { combineReducers } from 'redux'
import authedUser from './authedUsers'
import users from './users'
import tweets from './tweets'

//combine all the reducers and export
export default combineReducers({
    authedUser,
    users,
    tweets
})