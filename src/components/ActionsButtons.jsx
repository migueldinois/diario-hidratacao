import { StyleSheet, Text, View, Pressable } from 'react-native';
export function ActionButtons({ onAddWater, onReset }) {
    return (
        <View>
            <Text>Adicionar consumo:</Text>
            <Pressable onPress={() => onAddWater(200)}>
                <Text>+200 ml</Text>
            </Pressable>
            <Pressable onPress={() => onAddWater(350)}>
                <Text>+350 ml</Text>
            </Pressable>
            <Pressable onPress={() => onAddWater(500)}>
                <Text>+500 ml</Text>
            </Pressable>
            <Pressable onPress={onReset}>
                <Text>🔄 Reiniciar Dia</Text>
            </Pressable>
        </View>
    )
}