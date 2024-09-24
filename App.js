import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  const [neuronData, setNeuronData] = useState({
    id: '',
    voltaje: '',
    posicion_x: '',
    posicion_y: '',
    red: '',
    green: '',
    blue: ''
  });

  const handleInputChange = (name, value) => {
    setNeuronData({
      ...neuronData,
      [name]: value
    });
  };

  const guardarNeurona = () => {
    Alert.alert("Neurona Guardada", JSON.stringify(neuronData));
    // Aquí puedes agregar lógica para guardar la neurona en la clase administradora.
  };

  return (
    <LinearGradient colors={['#87CEEB', '#1E90FF']} style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Captura de Neuronas</Text>

        {['id', 'voltaje', 'posicion_x', 'posicion_y', 'red', 'green', 'blue'].map((field) => (
          <View key={field}>
            <Text style={styles.label}>{field.charAt(0).toUpperCase() + field.slice(1)} (entero)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder={`Ingrese el ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              placeholderTextColor="#ccc"
              value={neuronData[field]}
              onChangeText={(value) => handleInputChange(field, value)}
            />
          </View>
        ))}

        <TouchableOpacity style={styles.button} onPress={guardarNeurona}>
          <Text style={styles.buttonText}>Guardar Neurona</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    borderRadius: 10,
    color: '#000',
    backgroundColor: '#DDEEFF',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2, // Para Android
  },
  button: {
    backgroundColor: '#1E90FF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3, // Para Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;
