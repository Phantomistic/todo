import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
type itemType = {
    text: string;
    key: string;
  };

export default function TodoItem({item, pressHandler}:any){
    return(
        <TouchableOpacity onPress={()=> pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons  size={18} color='#333' name='delete'/>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
            
        </TouchableOpacity>
    )
    

}

const styles= StyleSheet.create({

    item: {
        flexDirection:'row',
        padding:16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    itemText:{
        marginLeft:10,
        color:'#777'
    }
})