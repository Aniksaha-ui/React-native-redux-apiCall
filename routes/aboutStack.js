import {createStackNavigator} from 'react-navigation-stack'
import About from '../component/About/About';
const Screens= {
    About:{
        screen:About,
    }
    
}

const AboutStack= createStackNavigator(Screens);

export default AboutStack