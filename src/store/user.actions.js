import { userService } from "../services/user.service.js";
import { showErrorMsg } from '../services/event-bus.service.js'

export function loadUsers() {
    return async dispatch => {
        try {
            dispatch({ type: 'LOADING_START' })
            const users = await userService.getUsers()
            dispatch({ type: 'SET_USERS', users })
        } catch (err) {
        } finally {
            dispatch({ type: 'LOADING_DONE' })
        }
    }
}

export function removeUser(userId) {
    return async dispatch => {
        try {
            await userService.remove(userId)
            dispatch({ type: 'REMOVE_USER', userId })
        } catch (err) {
        }
    }
}

export function onLogin(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
        } catch (err) {
            showErrorMsg('Cannot login')
        }
    }
}

export function onSignup(credentials) {
    return (dispatch) => {
        userService.signup(credentials)
            .then(user => {
                dispatch({
                    type: 'SET_USER',
                    user
                })
            })
            .catch(err => {
                showErrorMsg('Cannot signup')
            })
    }
}

export function onLogout() {
    return (dispatch) => {
        userService.logout()
            .then(() => dispatch({
                type: 'SET_USER',
                user: null
            }))
            .catch(err => {
                showErrorMsg('Cannot logout')
            })
    }
}
