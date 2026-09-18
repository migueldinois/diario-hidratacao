import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import { COLORS } from './src/constants/colors';
import { StyleSheet, Text, View, Button} from 'react-native';
import Header from './src/components/Header';
import { WaterProgress } from './src/components/WaterProgress';
import { ActionButtons } from './src/components/ActionsButtons';

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
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header META={META} />
        <WaterProgress consumo={consumo} META={META} />
        <ActionButtons onAddWater={handleAddWater} onReset={handleReset}/>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
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

