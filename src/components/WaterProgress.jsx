import { StyleSheet, Text, View } from 'react-native';

export function WaterProgress({META, consumo}) {
    return (
        <View>
            <Text>{consumo} ml</Text>
            <Text>{(consumo / META) * 100}% da meta atingida</Text>
        </View>)
}