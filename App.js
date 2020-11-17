import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [name,setName] = useState('Hello');
  const [age,setAge] = useState('30');

  return (
    <View style={styles.container}>
<Text>Enter Name:</Text>
      <TextInput
          multiline
          style={styles.input}
     placeholder='e.g. John'
      onChangeText={(val)=>setName(val)}/>

      <Text>Enter Age:</Text>
      <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder='e.g. 20'
          onChangeText={(val)=>setAge(val)}/>


<Text>name:{name}, age:{age}</Text>

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
  header:{
    backgroundColor: 'pink',
    padding:20,
  },
  boldText:{
    fontWeight:'bold',
  },
  body:{
    backgroundColor:'yellow',
    padding:20,
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,
  },

});
