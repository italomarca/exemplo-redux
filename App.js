import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const Box = ({color}) => {
  const [on, setOn] = useState(true);
  return (
    <View style={[styles.box, {backgroundColor: color}]}>
      {on ? <Text>Ligado</Text> : <Text>Desligado</Text>}
      <Button title="Ligar/Desligar" onPress={() => setOn(!on)} />
      <Button title="Ligar/Desligar TODAS CAIXAS" onPress={() => setOn(!on)} />
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Box color="orange" />
      <Box color="blue" />
    </SafeAreaView>
  );
};

const styles = {
  box: {flex: 1},
};

export default App;
