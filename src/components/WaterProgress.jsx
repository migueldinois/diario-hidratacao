import { StyleSheet, Text, View } from 'react-native';
import COLORS from '../constants/colors';


export function WaterProgress({ META, consumo }) {



    const porcentagemProgresso = (consumo / META) * 100;


    return (
        <View style={styles.containerWaterProgress}>
            <Text style={styles.consumoText}>{consumo} ml</Text>
            {/*  usando math min e sedo porcentagem inteira, nao quero nenhum numero decimal */}
            <Text style={styles.porcentagemText}>{Math.min(porcentagemProgresso, 100).toFixed(0)}% da meta atingida</Text>
            {/* Barra de progresso */}
            <View style={styles.progressBar}>
                {/* math.min serve para limitar a porcentagem entre 0 e 100 */}
                <View style={[styles.progress, { width: `${Math.min(porcentagemProgresso, 100).toFixed(0)}%` }]} />
            </View>
        </View>)
}
const styles = StyleSheet.create({
    progressBar: {
        width: 300,
        height: 20,
        backgroundColor: COLORS.white,
        // sombra
        shadowColor: COLORS.black,
        // elevation serve para colocar sombra no android e shadowOffset e shadowOpacity para colocar sombra no ios
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        borderRadius: 10,
        overflow: 'hidden',
    },

    progress: {
        height: '100%',
        backgroundColor: COLORS.secondary,
    },
    containerWaterProgress: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,

    },
    consumoText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: COLORS.primary,

    },
    porcentagemText: {
        fontSize: 12,
        marginBottom: 10,
        color: COLORS.textMuted,
    }
});

