import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useState} from 'react';
import {COLORS} from './src/constants/colors';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

export default function App() {
  const META = 2000; 
  const [consumo, setConsumo] = useState(0);

  const handleAddWater = (amount) => {
    setConsumo(consumo + amount);
  }

  const handleReset = () => {
    setConsumo(0);
  }

  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 10,
    fontSize: 20
  },
});
