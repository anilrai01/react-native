import React from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, Alert } from 'react-native'


const FirstScreen = () => {
    return ( 
        <View style={styles.innerContainer}>
        <Text style={styles.introMsg} onPress={() => alert("You Tapped the Button")}>Open up App.js to start working on your app!</Text>
        <Image style={styles.brandImg} source={require("../../assets/images/momo.jpg")} />
        <Button style={styles.introBtn} title="Native Button!" onPress={() => alert("You Clicked a Native Button")}/>
        <TouchableOpacity onPress={() => Alert.alert("My Custom Title", "My Custom Message", [{text: "Yes"}, {text: "No"}])}>
            <View style={styles.customBtn}>
            <Text style={{color: '#fff', fontWeight: 'bold', textTransform: 'uppercase'}}>Custom Button!</Text>
            </View>
        </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
  brandImg: {
    width: 200,
    height: 200
  },
  innerContainer: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  introMsg: {
    margin: 5
  },
  introBtn: {
    padding: 10,
    marginVertical: 10
  },
  customBtn: {
    width: 300, 
    height: 40, 
    backgroundColor: 'dodgerblue', 
    color: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    margin: 8,
  }
})

export default FirstScreen;