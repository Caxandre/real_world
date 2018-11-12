export const RECEIVE_USERS = 'RECEIVE_USERS'

/* == ACTION CREATORS == */
// 1. receiveUsers
export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}
// ---> END ACTION CREATORS <---