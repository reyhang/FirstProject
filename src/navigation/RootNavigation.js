import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LoginScreen from '../screens/LoginScreen';

export const AppScreen = {
    login:"Login",
    home:"Home"
}

const Stack = createStackNavigator();

export default function StackNavigator() {
    
    const isLogin = false;
    const initialRoute = isLogin ? AppScreen.home : AppScreen.login;


    return (
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name={AppScreen.login}
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
}


