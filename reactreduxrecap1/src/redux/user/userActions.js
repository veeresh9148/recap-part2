import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"
import axios from "axios"
export const fetchUsersRequest = () => {
    return{
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess = (user) => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: user
    }
}
export const fetchUsersFailure = (error) => {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) =>{
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            const users = response.data
            //response.data is the array of users
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            //error.message is the error discription
            const errorMsg = error.message
            dispatch(fetchUsersFailure(errorMsg))
        })
    }
}
