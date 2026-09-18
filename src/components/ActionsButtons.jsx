import { StyleSheet, Text, View, Button } from 'react-native';
export function ActionButtons({onAddWater, onReset}){
    return (
        <View>
            <Text>Adicionar consumo:</Text>
            <Button title="+200 ml" onPress={() => onAddWater(200)} />
            <Button title="+350 ml" onPress={() => onAddWater(350)} />
            <Button title="+500 ml" onPress={() => onAddWater(500)} />
            <Button title="🔄 Reiniciar Dia" onPress={onReset}></Button>
        </View>
    )
}