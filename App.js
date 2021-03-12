import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

const App = () => {
  return (
    <>
      <View>
        <Text style={styles.text}>Login</Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Username" />
      </View>
      <View>
        <Button title="Login" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  text: {
    fontFamily: 'sans-serif',
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  input: {
    borderColor: 'red',
    borderWidth: 1,
    paddingStart: 12,
  },
});

export default App;
