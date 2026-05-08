import { StyleSheet, Text, View } from 'react-native';

export default function Cabecalho() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.topBar} />
      <View style={styles.logoArea}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>💬</Text>
        </View>
        <Text style={styles.title}>Componente Picker</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  topBar: {
    width: '100%',
    height: 40,
    backgroundColor: '#84c7f7',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  logoArea: {
    width: '100%',
    backgroundColor: '#bce6ff',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderWidth: 1,
    borderColor: '#84c7f7',
  },
  iconBox: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 38,
  },
  title: {
    fontSize: 24,
    color: '#4e8bbd',
    fontWeight: '700',
  },
});