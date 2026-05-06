import { Image, ScrollView, StyleSheet, Text } from 'react-native';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.title}>Etec de Itanhaém</Text>

      <Image
        source={require('../../assets/images/logocps.png')} // troque depois
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.subtitle}>Informática p/ Internet</Text>

      <Image
        source={require('../../assets//imagem2.png')} // troque depois
        style={styles.image}
        resizeMode="contain"
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 20,
  },
  image: {
    width: 250,
    height: 150,
    marginVertical: 10,
  },
});