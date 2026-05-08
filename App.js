import { StyleSheet, View } from 'react-native';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho />
      <Conteudo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f4ff',
    paddingTop: 40,
    alignItems: 'center',
  },
});
