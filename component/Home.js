import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import Product from '../component/Product/product'
const Home =({navigation})=>{

    const pressHandler=()=>{
        // navigation.navigate('Category')
        navigation.push('Category')
    }

    return(
        <View>
            <View style={styles.clearfix}>
                <Button style={styles.button} title="GET STARTED" onPress={pressHandler}></Button>
            </View>
        </View>
        
    )
}


const styles=StyleSheet.create({
    itemlist:{
        width:'200%',
        padding:10,
        backgroundColor:'green',
        margin:5
    },
    clearfix:{
        marginTop:250
    },
    button:{
        color:"green"
    }
    
  });

export default Home;