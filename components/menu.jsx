import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './home'
import TabViewMenuPage from './about'
import SecondMap from './firebase'
import Details from './details'
import FirstMap from './users'

const Menu = ()=>{
    const Stack = createNativeStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'home'} component={Home} />
                <Stack.Screen name={'about'} component={TabViewMenuPage} />
                <Stack.Screen name={'users'} component={FirstMap} />
                <Stack.Screen name={'details'} component={Details} />
                <Stack.Screen name={'firebase'} component={SecondMap} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Menu 


