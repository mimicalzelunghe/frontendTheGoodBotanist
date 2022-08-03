import React from 'react';
import {Provider} from 'react-redux';

import {createStore, combineReducers}  from 'redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import CongratsScreen from './screens/CongratsScreen';
import GardenNameScreen from './screens/GardenNameScreen';
import PlantRecognitionScreen from './screens/PlantRecognitionScreen';
import PlantsFavoriteScreen from './screens/PlantsFavoriteScreen';
import PlotDimensionScreen from './screens/PlotDimensionScreen';
import PlotPlantsScreen from './screens/PlotPlantsScreen';
import PlotNameScreen from './screens/PlotNameScreen';
import PlotsScoringScreen from './screens/PlotsScoringScreen';
import SelectPlantsScreen from './screens/SelectPlantsScreen';
import SoilScreen from './screens/SoilScreen';
import SuggestionsScreen from './screens/SuggestionsScreen';
import SunshineScreen from './screens/SunshineScreen';
import ViewSinglePlantScreen from './screens/ViewSinglePlantScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ClimateScreen from './screens/ClimateScreen';
import ComponentsList from './screens/ComponentsList';

import climate from './reducers/climate.js'
import dimension from './reducers/dimension.js'
import idGarden from './reducers/idGarden.js'
import soil from './reducers/soil.js'
import sunshine from './reducers/sunshine.js'
import token from './reducers/token.js'

const store = createStore(combineReducers({climate, dimension, idGarden, soil, sunshine, token}))


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name == 'Score') {
            iconName = '';
          } else if (route.name == 'Plantes') {
            iconName = '';
          }
  
          return <Ionicons name={iconName} size={25} color={color} />;
        },
        })}
      tabBarOptions={{
        activeTintColor: '#eb4d4b',
        inactiveTintColor: '#FFFFFF',
        style: {
          backgroundColor: '#130f40',
        }
      }}
    >
      <Tab.Screen name="Score" component={PlotsScoringScreen} />
      <Tab.Screen name="Plantes" component={PlotPlantsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          
          <Stack.Screen name="Home" component={HomeScreen} />
          
          <Stack.Screen name="Congrats" component={CongratsScreen} />
          <Stack.Screen name="GardenName" component={GardenNameScreen} />
          <Stack.Screen name="PlantRecognition" component={PlantRecognitionScreen} />
          <Stack.Screen name="PlantsFavorite" component={PlantsFavoriteScreen} />
          <Stack.Screen name="PlotDimension" component={PlotDimensionScreen} />
          <Stack.Screen name="PlotName" component={PlotNameScreen} />
          <Stack.Screen name="SelectsPlant" component={SelectPlantsScreen} />
          <Stack.Screen name="Soil" component={SoilScreen} />
          <Stack.Screen name="Suggestions" component={SuggestionsScreen} />
          <Stack.Screen name="Sunshine" component={SunshineScreen} />
          <Stack.Screen name="ViewSinglePlant" component={ViewSinglePlantScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Climate" component={ClimateScreen} />
          <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
