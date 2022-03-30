import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './public/screens/home_screen';
import Favoritos from './public/screens/favorites_screen';
import About from './public/screens/about_screen';
import Motivacionais from './public/screens/motivacionais';
import Reflexoes from './public/screens/reflexoes';
import Biblicas from './public/screens/biblicas';
import Meditacoes from './public/screens/meditacoes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
        options={{
          headerShown:false,
        }}
        name="Home" 
        component={HomeScreen} />

        <Stack.Screen
        options={{
          headerShown:false,
        }}
        name="Favoritos" 
        component={Favoritos} />

        <Stack.Screen
        options={{
          headerShown:false,
        }}
        name="About" 
        component={About} />

        <Stack.Screen
        options={{
          headerShown:false,
        }}
        name="Motivacionais" 
        component={Motivacionais} />

        <Stack.Screen
        options={{
          headerShown:false,
        }}
        name="Reflexoes" 
        component={Reflexoes} />

        <Stack.Screen
        options={{
          headerShown:false,
        }}
        name="Biblicas" 
        component={Biblicas} />

        <Stack.Screen
        options={{
          headerShown:false,
        }}
        name="Meditacoes" 
        component={Meditacoes} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;