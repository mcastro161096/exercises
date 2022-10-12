import React from 'react';
import {View, StyleSheet} from 'react-native';

import First from './components/First';
import Oficial, {Comp1, Comp2} from './components/Mult';
import ButtonCustom from './components/ButtonCustom';

export default function App() {
  return (
    <View style={style.App}>
      <First />
      <Comp1 />
      <Comp2 />
      <Oficial />
      <ButtonCustom />
    </View>
  );
}

const style = StyleSheet.create({
  App: {
    flex: 1,
    fontSize: 24,
    backgroundColor: '#A00',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
