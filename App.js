// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Api from './api';
// import Loc from './loc';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Api/>
//       {/* <Loc/> */}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React from 'react';
import MapView, { Callout } from 'react-native-maps';
import { Marker,Circle } from 'react-native-maps';
import { StyleSheet, View ,Text,useState} from 'react-native';
import Locat from './Locat';
import Navigation from './Navigation';

export default function App() {
  return(
    <View><Locat/></View>
  )
}


