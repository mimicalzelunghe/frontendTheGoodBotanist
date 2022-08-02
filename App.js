import React from 'react';
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
import PlotNameScreen from './screens/PlotNameScreen';
import PlotsScoringScreen from './screens/PlotsScoringScreen';
import SelectPlantsScreen from './screens/SelectPlantsScreen';
import SoilScreen from './screens/SoilScreen';
import SuggestionsScreen from './screens/SuggestionsScreen';
import SunshineScreen from './screens/SunshineScreen';
import ViewSinglePlantScreen from './screens/ViewSinglePlantScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ClimateScreen from './screens/ClimateScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <ClimateScreen/>
      // <NavigationContainer>
      //   <Stack.Navigator screenOptions={{headerShown: false}}>
      //     <Stack.Screen name="SignIn" component={SignInScreen} />
      //     <Stack.Screen name="Home" component={HomeScreen} />
      //     <Stack.Screen name="SignUp" component={SignUpScreen} />
      //     <Stack.Screen name="Congrats" component={CongratsScreen} />
      //     <Stack.Screen name="GardenName" component={GardenNameScreen} />
      //     <Stack.Screen name="PlantRecognition" component={PlantRecognitionScreen} />
      //     <Stack.Screen name="PlantsFavorite" component={PlantsFavoriteScreen} />
      //     <Stack.Screen name="PlotDimension" component={PlotDimensionScreen} />
      //     <Stack.Screen name="PlotName" component={PlotNameScreen} />
      //     <Stack.Screen name="PlotsScoring" component={PlotsScoringScreen} />
      //     <Stack.Screen name="SelectsPlant" component={SelectPlantsScreen} />
      //     <Stack.Screen name="Soil" component={SoilScreen} />
      //     <Stack.Screen name="Suggestions" component={SuggestionsScreen} />
      //     <Stack.Screen name="Sunshine" component={SunshineScreen} />
      //     <Stack.Screen name="ViewSinglePlant" component={ViewSinglePlantScreen} />
      //     <Stack.Screen name="Welcome" component={WelcomeScreen} />
          
      //   </Stack.Navigator>
      // </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
