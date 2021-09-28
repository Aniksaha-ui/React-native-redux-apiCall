import React, { useEffect } from "react";
import { getSubCategory } from "../../src/actions/SubcategoryActions";
import { useState,useSelector, useDispatch } from "react-redux";
import {View,Text,ScrollView,StyleSheet,Button, FlatList} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'

const SubCategory =({navigation})=>{

    const dispatch=useDispatch();
  const {subcategory}=useSelector(state=>state.subcategory)
  
  

    useEffect(()=>{
     
  // const categoryName =(navigation.getParam('category_name'));
     const  id =  (navigation.getParam('id'));
     dispatch(getSubCategory(id));
        //alert(id)
    },dispatch)
    return(
        <ScrollView>
          
        <FlatList  data={subcategory} renderItem={({item})=>(
          <TouchableOpacity onLongPress={()=>alert("Too long press")}  onPress={()=>navigation.navigate('product',item)}>
              <View style={styles.itemlist}>
                 <Text style={styles.subcategoryname}>{item.subcategory_name}</Text>
              </View>
          </TouchableOpacity>
          
        )} />
       <View style={styles.clearfix}>
         
       </View>
      
     </ScrollView>
    )
}


const styles=StyleSheet.create({
    itemlist:{
        width:'220%',
        padding:10,
        backgroundColor:'green',
        margin:1,
  
    },
    clearfix:{
      marginTop:50
    },
    subcategoryname:{
      marginRight:380,
      textAlign:"center",
      fontSize:18,
      
    }
  });

export default SubCategory