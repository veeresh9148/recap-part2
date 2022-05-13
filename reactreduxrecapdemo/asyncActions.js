const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddeleware = require('redux-thunk').default
const axios = require('axios')
//import * as https  from 'https'

const initialState={
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading: true,
                users: action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return{
                loading: false,
                users: [],
                error: action.payload
            }
    }

}

const fetchUsers = () => {
    return function(dispatch) {
        const https = require('https')
        axios.defaults.httpsAgent = new https.Agent({
        rejectUnauthorized:false
})
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            //response.data is the array of users
            const users = response.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            //error.message is the error discription
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddeleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())