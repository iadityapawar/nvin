import {
  StatusBar
} from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import React, {useState, useEffect} from 'react';
//import {useFonts} from 'expo-font';
import AppLoading from "expo-app-loading";

export default function App() {
  
  const [count, setCount] = useState(1);
  
  // useEffect(()=>{
  //   async function loadFonts(){
  //     await Font.loadAsync({
  //       'Inter-Bold': require("./assets/fonts/Inter-Bold.ttf"),
  //       ),
        
  //     }).then(res=>{
  //       console.log("FONTS LOADED!");
  //       setLoaded(true)
  //     }).catch(Err=>{
  //       setLoaded(true);
  //       console.log(Err);
  //     }); 
  //   }

  //   loadFonts();
  // },[])
  
  // const Heading = (color) => {
  //   return({fontSize:45*fontScale, fontFamily: "Inter-Bold", color, marginTop: -10, marginLeft: InitialMargin, letterSpacing: 4})
  // }
  

//let [fontsLoaded] = useFonts({
//      'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
//    });
//    if (!fontsLoaded) {
//        return <AppLoading/>;
//    }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={{fontSize:19}}>'You are the Mine' + {count}</Text>
      <Button title='CLICK' onPress={()=>setCount(count+1)}/>
      <StatusBar style="auto" />
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#aaf',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });