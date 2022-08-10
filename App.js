import React from 'react';
import {Provider} from 'react-redux';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";


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
import WelcomeScreen from './screens/WelcomeScreen';
import ClimateScreen from './screens/ClimateScreen';
import AddPlantsScreen from './screens/AddPlantsScreen';
import TabSuggestionsScreen from './screens/TabSuggestionsScreen';
// import Spiner from './Components/Spiner';


//import SnapScreen from './screens/SnapScreen';
import ComponentsList from './screens/ComponentsList';
import ModalPlant from './Components/ModalPlant';
import IntroNewSuggestionsScreen from './screens/IntroNewSuggestionsScreen';


// recuders
import climate from './reducers/climate.js'
import dimension from './reducers/dimension.js'
import idGarden from './reducers/idGarden.js'
import gardenName from './reducers/gardenName.js'
import soil from './reducers/soil.js'
import sunshine from './reducers/sunshine.js'
import token from './reducers/token.js'
import plotId from './reducers/plotId'
import plotName from './reducers/plotName'
import idClimate from './reducers/idClimate'


const store = createStore(combineReducers({climate, dimension, idGarden, gardenName, soil, sunshine, token, plotId, plotName, idClimate}))


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name == 'Score') {
            iconName = 'chart-box';
          } else if (route.name == 'Vos plantes') {
            iconName = 'tree';
          } else if (route.name == 'Recommandation') {
            iconName = 'medal';
          }
  
          return <MaterialCommunityIcons  name={iconName} size={30} color={color} />;
        },
        })}
      tabBarOptions={{
        activeTintColor: '#1D6880',
        inactiveTintColor: '#A8ADAA',
        style: {
          height: 72,
          backgroundColor: '#FFFFFF',
          paddingBottom: 8,
        }
      }}
    >
      <Tab.Screen name="Score" component={PlotsScoringScreen} />
      <Tab.Screen name="Vos plantes" component={PlotPlantsScreen} />
      <Tab.Screen name="Recommandation" component={TabSuggestionsScreen} />

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
           <Stack.Screen name="IntroNewSuggestions" component={IntroNewSuggestionsScreen} />
           <Stack.Screen name="Soil" component={SoilScreen} />
           <Stack.Screen name="Suggestions" component={SuggestionsScreen} />
           <Stack.Screen name="Sunshine" component={SunshineScreen} />
           <Stack.Screen name="Welcome" component={WelcomeScreen} />
           <Stack.Screen name="Climate" component={ClimateScreen} />
           <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
           <Stack.Screen name="AddPlants" component={AddPlantsScreen} />
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
