import axios from 'axios';

import {
    ALL_SUB_CATEGORY_REQUEST,
    ALL_SUB_CATEGORY_SUCCESS,
    ALL_SUB_CATEGORY_FAIL,
    CLEAR_ERRORS,
   } from '../constants/subCategoryConstants'


   
   export const subcategoryReducer =(state={subcategory:{}},action)=>{
    console.log(action.type)
     switch(action.type){
         
         case ALL_SUB_CATEGORY_REQUEST:
             return {
                 loading:true,
                 subcategory:[]
             }
         case ALL_SUB_CATEGORY_SUCCESS:
             return{
                 loading:false,
                 subcategory:action.payload.subcategory
             }
         case ALL_SUB_CATEGORY_FAIL:
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