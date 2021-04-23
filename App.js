import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [tasks, settasks] = useState([
      {"task":"HTML I","done":true, "id":"1"},
      {"task":"CSS","done":true, "id":"2"},
      {"task":"Responsive design","done":true, "id":"3"},
     
      ])
  return (
    <View style={styles.container}>
     <View style={styles.content}>
        <View style={styles.list}>
        <FlatList
          data={tasks}
          renderItem={({item})=>(
            <Text>{item.task}</Text>
           )}
          />
          </View>
        </View>
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
  content: {
    padding: 30,
  },
  list: {
    marginTop: 30,
  }
});
