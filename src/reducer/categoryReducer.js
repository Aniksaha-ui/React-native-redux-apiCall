import {
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    CLEAR_ERRORS,
   } from '../constants/categoryConstants'


   export const categoryReducer =(state={category:{}},action)=>{
       console.log(action.type)
        switch(action.type){
            
            case ALL_CATEGORY_REQUEST:
                return {
                    loading:true,
                    category:[]
                }
            case ALL_CATEGORY_SUCCESS:
                return{
                    loading:false,
                    category:action.payload.category
                }
            case ALL_CATEGORY_FAIL:
                return{
                    loading:false,
                    error:action.payload
                }
            case CLEAR_ERRORS:
                return{
                    ...state,
                    error:null
                }

             default:
                return state;
        }
   }