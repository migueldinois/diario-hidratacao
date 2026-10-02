import { StyleSheet, Text, View } from 'react-native';

export default function AlertInfo({ consumo, meta }) {
    
    const metaAtingida = consumo >= meta;
    let mensagem = '';

    if (metaAtingida) {
        mensagem = 'Parabéns!, você atingiu sua meta diária!';
    } else {
        const faltam = meta - consumo;
        mensagem = `Continue bebendo água para atingir sua meta, faltam ${faltam} ml.`;
    }

    return (
        <View>
            <Text style={styles.tittleAlert}>{mensagem}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tittleAlert: {
        textAlign: 'center',
    }
});
