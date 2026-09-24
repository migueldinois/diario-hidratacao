import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import { WaterProgress } from './src/components/WaterProgress';
import { ActionButtons } from './src/components/ActionsButtons';
import { MetaProvider, useMeta } from './src/context/MetaContext';
import { MetaDialog } from './src/components/MetaDialog';

// Precisamos criar uma funcao sem ser a padrao pois devemos empacotar tudo depois na funcao app
function ConteudoApp() {
  const { meta } = useMeta(); 
  const [dialogVisivel, setDialogVisivel] = useState(false);
  const [consumo, setConsumo] = useState(0);

  const handleAddWater = (amount) => {
    setConsumo(consumo + amount);
  };

  const handleReset = () => {
    setConsumo(0);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Header META={meta} />
        <WaterProgress consumo={consumo} META={meta} />
        <ActionButtons 
          onAddWater={handleAddWater} 
          onReset={handleReset} 
          onChangeGoal={() => setDialogVisivel(true)} 
        />
        <MetaDialog
          visivel={dialogVisivel}
          onFechar={() => setDialogVisivel(false)}
        />
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <MetaProvider>
        <ConteudoApp />
      </MetaProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
});
