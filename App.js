import * as React from 'react';
import { View, StyleSheet, TextInput , Text, Button } from 'react-native';
import * as Speech from 'expo-speech';


export default function App() {

  const [value1, setValue] = React.useState('')

  const speak = () => {
    const thingToSay = value1;
    Speech.speak(thingToSay);
  };

  return (
    <View style={styles.container}>
      <TextInput
      style= {{borderColor: 'gray', borderWidth: 1, width: 200}}
      onChangeText={(value1) => setValue(value1)}
      placeholder={'Insert text you want to hear'}
      value={value1}
      />
      <Button title="Press to hear some words" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
