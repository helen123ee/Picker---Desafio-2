import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Conteudo() {
  const [nome, setNome] = useState('');
  const [linguagem, setLinguagem] = useState('Python');
  const [mensagem, setMensagem] = useState('');
  const [fundoInput, setFundoInput] = useState('#ffffff');

  function corDeFoco(focado) {
    setFundoInput(focado ? '#ffca82' : '#ffffff');
  }

  function confirmar() {
    if (nome.trim() === '') {
      setMensagem('Por favor, Digite seu nome');
    } else {
      setMensagem(`Olá ${nome}, a sua linguagem escolhida foi ${linguagem}`);
    }
  }

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Escolha Linguagem Favorita</Text>

      <TextInput
        style={[styles.input, { backgroundColor: fundoInput }]}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        onFocus={() => corDeFoco(true)}
        onBlur={() => corDeFoco(false)}
      />

      <Text style={styles.label}>Escolha uma linguagem:</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={linguagem}
          onValueChange={(itemValue) => setLinguagem(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Python" value="Python" />
          <Picker.Item label="JavaScript" value="JavaScript" />
          <Picker.Item label="Java" value="Java" />
          <Picker.Item label="C#" value="C#" />
          <Picker.Item label="Kotlin" value="Kotlin" />
        </Picker>
      </View>

      <View style={styles.buttonArea}>
        <Button title="Confirmar" onPress={confirmar} color="#3fa83f" />
      </View>

      <Text style={styles.resultado}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    color: '#133c6c',
    marginBottom: 8,
    textAlign: 'center',
  },
  input: {
    height: 44,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  picker: {
    height: 44,
    width: '100%',
  },
  buttonArea: {
    marginBottom: 18,
    borderRadius: 10,
    overflow: 'hidden',
  },
  resultado: {
    textAlign: 'center',
    fontSize: 16,
    color: '#214f24',
  },
});