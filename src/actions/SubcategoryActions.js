import axios from 'axios';

import {
    ALL_SUB_CATEGORY_REQUEST,
    ALL_SUB_CATEGORY_SUCCESS,
    ALL_SUB_CATEGORY_FAIL,
    CLEAR_ERRORS,
   } from '../constants/subCategoryConstants'


   export const getSubCategory =(id)=>async(dispatch)=>{
       try{
        //    const subcategoryid=id;
        dispatch({type:ALL_SUB_CATEGORY_REQUEST})
        const config = {
            headers: {
                'Accept':'*/*',
                'Content-Type': "application/json",
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':"PUT,POST,DELETE,GET,OPTIONS",
                'Access-Control-Allow-Credentials':"true",
                'Access-Control-Allow-Headers':"Accept,Authorization,Content-type"
            }
        }

        console.log("called")

        const {data} = await axios.get(`https://ecommerce.xixotech.net/public/api/subcategory/${id}`,config)

        dispatch({
            type:ALL_SUB_CATEGORY_SUCCESS,
            payload:data,
        })


       }catch(error){
        dispatch({
            type:ALL_SUB_CATEGORY_FAIL,
            payload:error.response.data.message
        })
       }
   }