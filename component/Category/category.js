import React from "react";
import { useEffect } from "react";
import {View,Text,ScrollView,StyleSheet,Button, FlatList} from 'react-native'
import { getCategory } from "../../src/actions/CategoryAction";
import { useState,useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";


const Category = ({navigation})=>{

  const pressHandler =()=>{
      navigation.goBack();
  }

  const dispatch=useDispatch();
  const {category}=useSelector(state=>state.category) 
  
     //console.log(category)
  useEffect(()=>{

    dispatch(getCategory());
  },[dispatch])



    return(
      <ScrollView>
         <FlatList  data={category} renderItem={({item})=>(
           <TouchableOpacity onLongPress={()=>alert("Too long press")}  onPress={()=>navigation.navigate('Product',item)}>
               <View style={styles.itemlist}>
                  <Text style={styles.categoryname}>{item.category_name}</Text>
               </View>
           </TouchableOpacity>
           
         )} />
        <View style={styles.clearfix}>
          <Button style={styles.button} title="Go Back" onPress={pressHandler}></Button>
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
  categoryname:{
    marginRight:380,
    textAlign:"center",
    fontSize:18,
    
  }
});


export default Category