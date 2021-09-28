import React from "react";
import { useEffect } from "react";
import {View,Text,ScrollView,StyleSheet,Button, FlatList,Image, Dimensions} from 'react-native'
import { getCategory } from "../../src/actions/CategoryAction";
import { useState,useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Home from "../Home";

var {width} = Dimensions.get("window")

const Category = ({navigation})=>{

  const pressHandler =()=>{
      navigation.goBack();
  }

  const dispatch=useDispatch();
  const {category}=useSelector(state=>state.category) 
  useEffect(()=>{

    dispatch(getCategory());
  },[dispatch])

    return(
      <View>
          <View style={{marginTop:30}}>
        
        <FlatList data={category} renderItem={({item})=>(
        <TouchableOpacity style={{width:'100%'}} onLongPress={()=>alert("Too long press")}  onPress={()=>navigation.navigate('SubCategory',item)}>
        <View style={{width:width/2}}>
            <View style={styles.container}>
              
                  <View style={styles.card} />
                  <Text style={styles.title}>{item.category_name}</Text>
            </View>
            
        </View>
    </TouchableOpacity>
   
      )} numColumns={2} />
      
      </View>


      </View>
      
      
    )
}

const styles=StyleSheet.create({
  container:{
    width:width/2-20,
    height:width/5,
    padding:10,
    borderRadius:10,
    marginTop:10,
    marginBottom:5,
    marginLeft:10,
    alignItems:'center',
    elevation:8,
    backgroundColor:'white'
  },
  title:{
    top:-60,
    fontWeight:"bold",
    fontSize:10,
    textAlign:"center"
    
  },
  image:{
    width:width/2 - 20 -10,
    height:width/2 -20 -30,
    backgroundColor:'transparent',
    position:'absolute',
    top:-45,

  },
  card:{
    marginBottom:10,
    height:width/2 -20-90,
    backgroundColor:'transparent',
    width:width/2-20-10

  },

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