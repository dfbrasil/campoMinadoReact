import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params';
import { Component } from 'react';
import Field from './src/components/Field';

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
      <StatusBar style="auto" />
        <Text> Iniciando o Mines </Text>
        <Text> Tamanho da Grade:
          {params.getRowsAmount()}*{params.getColumsnAmount()}
        </Text>
        <Field />
        <Field opened nearMines={1}/>
        <Field opened nearMines={2}/>
        <Field opened nearMines={3}/>
        <Field opened nearMines={4}/>
        <Field opened nearMines={5}/>
        <Field opened nearMines={6}/>
        <Field opened nearMines={7}/>
      </View>
    );
  }    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
