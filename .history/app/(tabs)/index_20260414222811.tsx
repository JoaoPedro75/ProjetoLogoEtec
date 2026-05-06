import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={{ marginTop: 80, alignItems: 'center' }}>
      
      
      <Text style={{ color: 'red', fontSize: 14 }}>Pequeno</Text>
      <Text style={{ color: 'red', fontSize: 20, fontStyle: 'italic' }}>Médio em Itálico</Text>
      <Text style={{ color: 'red', fontSize: 28, fontWeight: 'bold' }}>Grande em Negrito </Text>

      
      <Text style={{ color: 'blue', fontSize: 14 }}>Pequeno</Text>
      <Text style={{ color: 'blue', fontSize: 20, fontStyle: 'italic' }}>Médio em Itálico</Text>
      <Text style={{ color: 'blue', fontSize: 28, fontWeight: 'bold' }}>Grande em Negrito </Text>

      
      <Text style={{ color: 'green', fontSize: 14 }}>Pequeno</Text>
      <Text style={{ color: 'green', fontSize: 20, fontStyle: 'italic' }}>Médio em itálico</Text>
      <Text style={{ color: 'green', fontSize: 28, fontWeight: 'bold' }}>Grande em Negrito</Text>

      
      <Text style={{ color: 'purple', fontSize: 14 }}>Pequeno</Text>
      <Text style={{ color: 'purple', fontSize: 20, fontStyle: 'italic' }}>Médio em Itálico</Text>
      <Text style={{ color: 'purple', fontSize: 28, fontWeight: 'bold' }}>Grande em Negrito</Text>

    </View>
  );
}