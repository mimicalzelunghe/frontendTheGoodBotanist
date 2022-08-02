import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ClimateScreen from './screens/ClimateScreen';
import ComponentsList from './screens/ComponentsList';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (

    <View style={styles.container}>
      <ClimateScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
