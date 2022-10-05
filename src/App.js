import React from 'react';
import {View} from 'react-native';

import First from './components/First';
import Oficial, {Comp1, Comp2} from './components/Mult';

export default function App() {
  return (
    <View>
      {/* <First /> */}
      <Comp1 />
      <Comp2 />
      <Oficial />
    </View>
  );
}
