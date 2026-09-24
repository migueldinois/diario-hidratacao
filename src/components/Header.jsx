import { StyleSheet, Text, View } from 'react-native';
import COLORS from '../constants/colors';

export default function Header({ META }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>💧 Diário de Hidratação</Text>
      <Text style={styles.subtitle}>Meta diária: {META} ml</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textMain,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.textMuted,
  },
});
