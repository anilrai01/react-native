import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { 
  StyleSheet, 
  Platform,
  SafeAreaView,
  TouchableOpacity,
  // Text,
  // Button,
  // ToastAndroid,
  // Alert
} from 'react-native';

import Constants from "expo-constants";
// import FirstScreen from './app/screens/FirstScreen';
import ToDo from './app/screens/ToDo';


import { TodoProvider } from './app/context/TodoContext';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function App() {
  return (
    <TodoProvider>
    <SafeAreaView style={styles.container}>
      {/* <FirstScreen />
        <TouchableOpacity onPress={() => alert("Test!")}>
          <Text style={{padding: 20}} onPress={() => Alert.alert("Custom Title", "Custom Message", [{text: "Yes", onPress: alert("Hi")},{text: "No"}])}> Hello World </Text>
        </TouchableOpacity>
        <Button title="Hello React Native" onPress={()=>ToastAndroid.show("Test Toast", ToastAndroid.SHORT)} /> */}
        <ToDo />
      <StatusBar style="auto" />
    </SafeAreaView>
    </TodoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // backgroundColor: 'pink',
    // justifyContent: 'center',
    // alignContent: 'center',
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0
  }
});