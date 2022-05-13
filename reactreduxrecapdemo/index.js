//console.log('From index.js')
const redux = require('redux')
const reduxLogger = require('redux-logger')

const combineReducers = redux.combineReducers
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()
//import redux from 'redux'
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'

function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'First redux action'
    }
    
}

function buyIcecream(){
    return{
        type: BUY_ICECREAM
    }
}

//(previousState, action) =>newState

// const initialState={
//     numOfCakes: 10,
//     numOfIcecreams: 20
// }

const initialCakeState ={
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIcecreams: 20
}

// const reducer = (state=initialState, action) => {
//     switch(action.type){
//         case BUY_CAKE:
//             return{
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1
//             }
//         case BUY_ICECREAM:
//             return{
//                 ...state,
//                 numOfIcecreams: state.numOfIcecreams - 1
//             }
//         default: return state
//     }
// }

const cakeReducer = (state=initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default: return state
    }
}


const iceCreamReducer = (state=initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numOfIcecreams: state.numOfIcecreams - 1
            }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State', store.getState())
// const unsubscribe = store.subscribe(()=> console.log('Updated State', store.getState()))
const unsubscribe = store.subscribe(()=> {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()