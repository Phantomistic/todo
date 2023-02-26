import { StatusBar } from 'expo-status-bar';
import {TouchableWithoutFeedback,Keyboard, StyleSheet,Alert, FlatList} from 'react-native';
import React, {useState} from 'react';
import  Header  from "../../components/header";
import TodoItem from "../../components/todoItem";
import AddTodo from '../../components/apptodo';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';


export default function TabOneScreen() {
  const [Todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'Create todo app', key: '2'},
    {text: 'play alice greenfingers', key: '3'},
  ])

  const pressHandler = (key:string) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key)
    });
  }

  const submitHandler = (text:string) =>{
    if(text.length > 3){
      setTodos((prevTodos) => {
        return[
          {text: text, key:Math.random().toString()},
          ...prevTodos
        ]
    })
    } else{
      Alert.alert('OOPS!','more than 3 characters',[
        {text:'Alrighty', onPress: () => console.log('alert closed')}
      ])

    }
    
  }
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <View style={styles.container}>
      
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={Todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
        
        
        <StatusBar style="auto" />
        
      </View>
    </TouchableWithoutFeedback>
      
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  content:{
    flex:1,
    padding:40,
  },
  list:{
    flex:1,
    marginTop:20,
  }
});
