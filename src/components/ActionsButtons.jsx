import { StyleSheet, Text, View, Pressable } from 'react-native';
import COLORS from '../constants/colors';

export function ActionButtons({ onAddWater, onReset }) {
    return (
        <View style={styles.containerActionButtons}>
            <View style={styles.viewAdicionarConsumo}>
                <Text style={styles.textAdicionarConsumo}>Adicionar consumo:</Text>
            </View>
            <View style={styles.containerButtons}>
                <View style={styles.viewAdicionarConsumo}>
                    <Pressable style={styles.botaoAddWater} onPress={() => onAddWater(200)}>
                        <Text style={styles.textBotaoAddWater}>+200 ml</Text>
                    </Pressable>
                    <Pressable style={styles.botaoAddWater} onPress={() => onAddWater(350)}>
                        <Text style={styles.textBotaoAddWater}>+350 ml</Text>
                    </Pressable>
                    <Pressable style={styles.botaoAddWater} onPress={() => onAddWater(500)}>
                        <Text style={styles.textBotaoAddWater}>+500 ml</Text>
                    </Pressable>
                </View>

                <View style={styles.viewReset}>
                    <Pressable style={styles.botaoReset} onPress={onReset}>
                        <Text style={styles.textBotaoReset}>🔄 Reiniciar Dia</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerActionButtons:{
        justifyContent: 'center',
        
        padding: 20,
    },
    viewAdicionarConsumo: {
        flexDirection: 'row',

    },
    textAdicionarConsumo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.textMain,
    },

    botaoAddWater: {
        padding: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        marginRight: 10,
        width: 100,
        

    },
    textBotaoAddWater: {
        color: COLORS.white,
        textAlign: 'center',
    },

    botaoReset: {
        padding: 10,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.danger,
        marginTop: 10,
    },
    textBotaoReset: {
        color: COLORS.danger,
        textAlign: 'center',
    }

})