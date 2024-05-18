import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Checkbox } from 'expo-checkbox'

const App = () => {
  const [via1TempoVermelho, setVia1TempoVermelho] = useState('')
  const [via1AmareloPiscante, setVia1AmareloPiscante] = useState('')
  const [via1TempoVerde, setVia1TempoVerde] = useState('')
  const [via2TempoVermelho, setVia2TempoVermelho] = useState('')
  const [via2AmareloPiscante, setVia2AmareloPiscante] = useState('')
  const [via2TempoVerde, setVia2TempoVerde] = useState('')
  const [iluminacao, setIluminacao] = useState(false)
  const [estacionamento, setEstacionamento] = useState(false)

  const botaoSalvar = async () => {
    try {
      let endpoint = 'http://192.168.0.107:5000//atualizarDados'
      const resposta = await fetch(endpoint,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            tempo_vermelho_via_1: via1TempoVermelho,
            amarelo_piscante_via_1: via1AmareloPiscante,
            tempo_verde_via_1: via1TempoVerde,
            tempo_vermelho_via_2: via2TempoVermelho,
            amarelo_piscante_via_2: via2AmareloPiscante,
            tempo_verde_via_2: via2TempoVerde,
            iluminacao_ligada: iluminacao,
            carro_estacionado: estacionamento
          })
        }
      )
      if (resposta.ok) {
        alert('Dados salvo com sucesso')
      }
    } catch (error) {
      console.error('Erro ao salvar dados:', error)
    }
  }

  const buscarDadosAPI = async () => {
    try {
        const response = await fetch(`http://192.168.0.107:5000/obterDados`);
        const dados = await response.json();

        console.log(dados);
        
        setVia1TempoVermelho(String(dados.tempo_vermelho_via_1))
        setVia1AmareloPiscante(dados.amarelo_piscante_via_1)
        setVia1TempoVerde(String(dados.tempo_verde_via_1))
        setVia2TempoVermelho(String(dados.tempo_vermelho_via_2))
        setVia2AmareloPiscante(dados.amarelo_piscante_via_2)
        setVia2TempoVerde(String(dados.tempo_verde_via_2))
        setIluminacao(dados.iluminacao_ligada)
        setEstacionamento(dados.carro_estacionado)
          
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

  useEffect(() => {

    buscarDadosAPI()

    const interval = setInterval(() => {
      buscarDadosAPI();
    }, 10000); // 10000 ms = 10 segundos

    // Limpar o intervalo quando o componente desmonta
    return () => clearInterval(interval);
    
  }, []);

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
          <Text style={styles.subtitulo}>Semáforo via 1</Text>
          <View style={styles.card}>
            {/* Semáforo */}
            <View style={styles.semaforo}>
              <View style={[styles.circuloSemaforo, { backgroundColor: '#f00' }]}></View>
              <View style={[styles.circuloSemaforo, { backgroundColor: 'yellow' }]}></View>
              <View style={[styles.circuloSemaforo, { backgroundColor: '#0f0' }]}></View>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
              <Text>Tempo da cor vermelho</Text>
              <TextInput placeholder='Digite o tempo em segundos' keyboardType='numeric' style={styles.input}
                value={via1TempoVermelho} onChangeText={setVia1TempoVermelho} />
              <View style={styles.checkbox}>
                <Checkbox value={via1AmareloPiscante} onValueChange={setVia1AmareloPiscante} />
                <Text>  Amarelo piscante</Text>
              </View>
              <Text>Tempo da cor verde</Text>
              <TextInput placeholder='Digite o tempo em segundos' keyboardType='numeric' style={styles.input}
                value={via1TempoVerde} onChangeText={setVia1TempoVerde} />
            </View>
          </View>

          <Text style={styles.subtitulo}>Semáforo via 2</Text>
          <View style={styles.card}>
            {/* Semáforo */}
            <View style={styles.semaforo}>
              <View style={[styles.circuloSemaforo, { backgroundColor: '#f00' }]}></View>
              <View style={[styles.circuloSemaforo, { backgroundColor: 'yellow' }]}></View>
              <View style={[styles.circuloSemaforo, { backgroundColor: '#0f0' }]}></View>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
              <Text>Tempo da cor vermelho</Text>
              <TextInput placeholder='Digite o tempo em segundos' keyboardType='numeric' style={styles.input}
                value={via2TempoVermelho} onChangeText={setVia2TempoVermelho} />
              <View style={styles.checkbox}>
                <Checkbox value={via2AmareloPiscante} onValueChange={setVia2AmareloPiscante} />
                <Text>  Amarelo piscante</Text>
              </View>
              <Text>Tempo da cor verde</Text>
              <TextInput placeholder='Digite o tempo em segundos' keyboardType='numeric' style={styles.input}
                value={via2TempoVerde} onChangeText={setVia2TempoVerde} />
            </View>
          </View>

          <Text style={styles.subtitulo}>Iluminação pública</Text>
          <View style={styles.card}>
            <View style={styles.checkbox}>
              <Checkbox value={iluminacao} onValueChange={setIluminacao} />
              <Text> Ativar iluminação</Text>
            </View>
          </View>

          <Text style={styles.subtitulo}>Estacionamento</Text>
          <View >
            <Text style={{ textAlign: 'center', color: '#0f0', fontWeight: 'bold', fontSize: 20 }}>Vaga Livre</Text>
          </View>

          <TouchableOpacity style={styles.botao} onPress={botaoSalvar}>
            <Text style={styles.textoBotao}> Salvar </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16, backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#007bff',
    padding: 20,
    alignItems: 'center',
    borderBottomColor: '#a1a1a1',
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5
  },
  card: { flexDirection: 'row', borderBottomColor: '#007bff', borderBottomWidth: 2 },
  titulo: {
    fontSize: 24, fontWeight: 'bold', color: '#ffffff'
  },
  conteudo: {
    backgroundColor: '#007bff',
  },
  corpo: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
    marginVertical: 5
  },
  semaforo: { width: 70, height: 165, backgroundColor: '#d1d1d1', borderBlockColor: '#000', borderWidth: 1, borderRadius: 10, alignItems: 'center', padding: 10 },
  circuloSemaforo: {
    width: 45, height: 45, borderRadius: 25, borderColor: '#000', borderWidth: 1, margin: 2
  },
  input: {
    borderWidth: 1,
    borderColor: '#a1a1a1',
    padding: 8,
    marginBottom: 8,
    borderRadius: 5,
    width: '100%'
  },
  checkbox: { flexDirection: 'row', paddingVertical: 8 },
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
    fontSize: 18, color: '#fff', fontWeight: 'bold'
  },
});

export default App;