export const SET_AUTHED_USER = 'SET_AUTHED_USER'

/* == ACTION CREATORS == */
// 1. setAuthedUser
export default function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}
// ---> END ACTION CREATORS <---