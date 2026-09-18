import { StyleSheet, Text, View, Pressable } from 'react-native';
import COLORS from '../constants/colors';

export function ActionButtons({ onAddWater, onReset }) {
    return (
        <View>
            <Text>Adicionar consumo:</Text>
            <Pressable style={styles.botaoAddWater} onPress={() => onAddWater(200)}>
                <Text style={styles.textBotaoAddWater}>+200 ml</Text>
            </Pressable>
            <Pressable style={styles.botaoAddWater} onPress={() => onAddWater(350)}>
                <Text style={styles.textBotaoAddWater}>+350 ml</Text>
            </Pressable>
            <Pressable style={styles.botaoAddWater} onPress={() => onAddWater(500)}>
                <Text style={styles.textBotaoAddWater}>+500 ml</Text>
            </Pressable>
            <Pressable style={styles.botaoReset} onPress={onReset}>
                <Text style={styles.textBotaoReset}>🔄 Reiniciar Dia</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    botaoAddWater: {
        padding: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
    },
    textBotaoAddWater: {
        color: COLORS.white 
    },

    botaoReset: {
        padding: 10,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.danger,
    },
    textBotaoReset: {
        color: COLORS.danger
    }

})