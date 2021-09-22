import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import About from './about';
import { NavigationContainer } from '@react-navigation/native';

const Menu = () => {
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'home'} style={styles.menu}>
                <Stack.Screen name={'home'} component={Home}  />
                <Stack.Screen name={'about'} component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({
    menu:{
      flexDirection: 'row',
      flex:1,
    },
  });
export default Menu
