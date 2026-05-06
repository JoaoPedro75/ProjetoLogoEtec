import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.card}>
        <Text style={styles.title}>Etec de Itanhaém</Text>

        <Image
          source={require('../../assets/images/logocps.png')} 
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>Informática p/ Internet</Text>

        <Image
          source={require('../../assets/images/informatica.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff', // fundo branco
  },
  card: {
    backgroundColor: '#d3d3d3', // card cinza
    padding: 20,
    alignItems: 'center',
    width: '100%', // ocupa toda largura
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