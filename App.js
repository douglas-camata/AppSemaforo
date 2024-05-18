import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Checkbox } from 'expo-checkbox'

const App = () => {

  return (
    <ScrollView style={{ backgroundColor: '#007bff' }}>
      <StatusBar backgroundColor={'#007bff'} />
      <View style={styles.header}>
        <Text style={styles.titulo}>Gerenciamento de Semáforo</Text>
      </View>
      <View style={styles.conteudo}>
        <Text style={{ color: '#fff', fontSize: 20, marginVertical: 10, marginStart: 10 }}> Controle de tempo de semáforo</Text>
      </View>
      <View style={styles.corpo}>
        <View style={{ padding: 10 }}>
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#007bff', marginVertical: 5}}>Semáforo via 1</Text>
          <View style={{ flexDirection: 'row', borderBottomColor: '#007bff', borderBottomWidth: 2 }}>
            {/* Semáforo */}
            <View style={{ width: 70, height: 165, backgroundColor: '#d1d1d1', borderBlockColor: '#000', borderWidth: 1, borderRadius: 10, alignItems: 'center', padding: 10 }}>
              <View style={{ width: 45, height: 45, backgroundColor: '#f00', borderRadius: 25, borderColor: '#000', borderWidth: 1, marginBottom: 5 }}></View>
              <View style={{ width: 45, height: 45, backgroundColor: 'yellow', borderRadius: 25, borderColor: '#000', borderWidth: 1, marginBottom: 5 }}></View>
              <View style={{ width: 45, height: 45, backgroundColor: '#0f0', borderRadius: 25, borderColor: '#000', borderWidth: 1, marginBottom: 5 }}></View>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
              <Text>Tempo da cor vermelho</Text>
              <TextInput placeholder='Digite o tempo em segundos' keyboardType='numeric' style={styles.input} />
              <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
                <Checkbox />
                <Text>  Amarelo piscante</Text>
              </View>
              <Text>Tempo da cor vermelho</Text>
              <TextInput placeholder='Digite o tempo em segundos' keyboardType='numeric' style={styles.input} />
            </View>
          </View>

          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#007bff', marginVertical: 5}}>Semáforo via 2</Text>
          <View style={{ flexDirection: 'row', borderBottomColor: '#007bff', borderBottomWidth: 2 }}>
            {/* Semáforo */}
            <View style={{ width: 70, height: 165, backgroundColor: '#d1d1d1', borderBlockColor: '#000', borderWidth: 1, borderRadius: 10, alignItems: 'center', padding: 10 }}>
              <View style={{ width: 45, height: 45, backgroundColor: '#f00', borderRadius: 25, borderColor: '#000', borderWidth: 1, marginBottom: 5 }}></View>
              <View style={{ width: 45, height: 45, backgroundColor: 'yellow', borderRadius: 25, borderColor: '#000', borderWidth: 1, marginBottom: 5 }}></View>
              <View style={{ width: 45, height: 45, backgroundColor: '#0f0', borderRadius: 25, borderColor: '#000', borderWidth: 1, marginBottom: 5 }}></View>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
              <Text>Tempo da cor vermelho</Text>
              <TextInput placeholder='Digite o tempo em segundos' keyboardType='numeric' style={styles.input} />
              <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
                <Checkbox />
                <Text>  Amarelo piscante</Text>
              </View>
              <Text>Tempo da cor vermelho</Text>
              <TextInput placeholder='Digite o tempo em segundos' keyboardType='numeric' style={styles.input} />
            </View>
          </View>

          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#007bff', marginVertical: 5}}>Iluminação pública</Text>
          <View style={{ flexDirection: 'row', borderBottomColor: '#007bff', borderBottomWidth: 2 }}>
            <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
              <Checkbox />
              <Text> Ativar iluminação</Text>
            </View>
          </View>

          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#007bff', marginVertical: 5}}>Estacionamento</Text>
          <View >
            <Text style={{textAlign:'center', color:'#f00', fontWeight:'bold', fontSize: 20 }}>Vaga Ocupada</Text>
          </View>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}> Salvar </Text>
          </TouchableOpacity>

        </View>




      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flex: 1,
    backgroundColor: '#007bff',
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5
  },
  titulo: {
    fontSize: 24, fontWeight: 'bold', color: '#ffffff'
  },
  conteudo: {
    backgroundColor: '#007bff',
    flex: 1
  },
  corpo: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: '#a1a1a1',
    padding: 8,
    marginBottom: 8,
    borderRadius: 5,
    width: '100%'
  },
  botao: {
    backgroundColor: '#007bff',
    borderRadius: 4,
    paddingVertical: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderColor: '#fff',
    borderWidth: 2
  },
  textoBotao: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
});

export default App;