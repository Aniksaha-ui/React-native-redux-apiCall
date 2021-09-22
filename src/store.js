import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { categoryReducer } from './reducer/categoryReducer';



const reducer = combineReducers({
  category:categoryReducer
   
})

let initialState={}
const middleware=[thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;