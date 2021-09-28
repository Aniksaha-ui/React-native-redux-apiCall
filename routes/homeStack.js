import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../component/Home';
import Category from '../component/Category/category'
import Product from '../component/Product/product';
import SubCategory from '../component/Subcategory/SubCategory';
import Header from '../src/shared/header';
import React from 'react';
import Header2 from '../src/shared/header2';

const Screens= {
    Home:{
        screen:Home,
        navigationOptions:({navigation})=>{
            return{
                headerTitle:()=><Header navigation={navigation} />
            }
        }
    },
    Category:{
        screen:Category,
        navigationOptions:({navigation})=>{
            return{
                headerTitle:()=><Header2 />
            }
        }
        
    },
    SubCategory:{
        screen:SubCategory
    },
    Product:{
        screen:Product
    }
}

const HomeStack= createStackNavigator(Screens);

export default HomeStack