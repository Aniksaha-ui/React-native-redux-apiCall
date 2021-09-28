import React from 'react'
import {StyleSheet,Image,SafeAreaView} from 'react-native'


const Header2 =()=>{
    return(
        <SafeAreaView style={styles.header}>
            <Image source={require("../../assets/favicon.png")} resizeMode="contain" style={{height:50,alignContent:'center'}} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        flexDirection:'row',
        alignContent:"center",
        justifyContent:"center",
        padding:20,   
         
    }
})

export default Header2;