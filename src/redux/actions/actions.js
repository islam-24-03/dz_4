import { types } from "../types"

export function changeTitleAction() {
    return {
        type: types.CHANGE_TITLE
    }
}

export function asyncFunctionAction() {
    return function (dispatch) {
        setTimeout(() => {
            alert("hello")
        }, 2000)
    }
}

export function fetchUsersAction() {
    return async function (dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        dispatch(getUsersAction(data))
    }
}

function getUsersAction(users) {
    return {
        type: types.GET_USERS,
        payload: users
    }
}

export function fetchUserOneInfo(id) {
    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        dispatch(getUserInfoAction(data))
    }
}

function getUserInfoAction(userDetails) {
    return {
        type: types.GET_USER_INFO,
        payload: userDetails
    }
}
