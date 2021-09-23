import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../component/Home';
import Category from '../component/Category/category'
import Product from '../component/Product/product';

const Screens= {
    Home:{
        screen:Home
    },
    Category:{
        screen:Category
    },
    Product:{
        screen:Product
    }
}

const HomeStack= createStackNavigator(Screens);

export default createAppContainer(HomeStack)