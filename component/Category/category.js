import React from "react";
import { useEffect } from "react";
import {View,Text,ScrollView,StyleSheet, FlatList} from 'react-native'
import { getCategory } from "../../src/actions/CategoryAction";
import { useState,useSelector, useDispatch } from "react-redux";


const Category = ()=>{

  const dispatch=useDispatch();
  const {category}=useSelector(state=>state.category) 
  
    // console.log(category)
  useEffect(()=>{

    dispatch(getCategory());
  },[dispatch])



    return(
      <ScrollView>
         <FlatList  data={category} renderItem={({item})=>(
            <View  style={styles.itemlist}>
              <Text>{item.category_name}</Text>
            </View>
         )} />
      </ScrollView>
      
    )
}

const styles=StyleSheet.create({
  itemlist:{
      width:'200%',
      padding:10,
      backgroundColor:'green',
      margin:1
  }
})


export default Category