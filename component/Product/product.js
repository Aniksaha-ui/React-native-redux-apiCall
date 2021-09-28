import React, { useEffect } from "react";
import { View,Text } from "react-native";


const Product = ({})=>{

    useEffect(()=>{
        const  id =  (navigation.getParam('id'));
        const categoryName =(navigation.getParam('category_name'));
        alert(id)
    })

    return (
        <View>
            <Text>I am from Product</Text>
        </View>
    )
}

export default Product