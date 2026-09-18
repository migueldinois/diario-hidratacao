import { StyleSheet, Text, View } from 'react-native';

export default function Header({META}) {
  return (
    <View>
      <Text>💧 Diário de Hidratação</Text>
      <Text>Meta diária: {META} ml</Text>
    </View>
  );
}