import React from 'react';
import {Button} from 'react-native';

export default props => {
  const exec = (test = 'default') => {
    console.warn('Executed!!! ' + test);
  };

  return (
    <Button
      title="Execute"
      onPress={() => {
        exec('opa');
      }}
    />
  );
};
