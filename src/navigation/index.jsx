import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CoinDetailsScreen from '../screens/CoinDetailsScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name ={"Home"} component = {HomeScreen}/>
            <Stack.Screen name ={"CoinDetail"} component = {CoinDetailsScreen}/>
        </Stack.Navigator>
    )
}
export default Navigation;