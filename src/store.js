import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { categoryReducer } from './reducer/categoryReducer';
import { subcategoryReducer } from './reducer/subcategoryReducer';



const reducer = combineReducers({
  category:categoryReducer,
  subcategory:subcategoryReducer
   
})

let initialState={}
const middleware=[thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;