import React, {useState} from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Statistics() {
  const [confirmed2, setConfirmed2 ] = useState(0);
  const [recovered2, setRecovered2 ] = useState(0);
  const [deaths2, setDeaths2 ] = useState(0);
  const [active, setActive ] = useState(0);
  const [critical, setCritical ] = useState(0);
  const [tests, setTests ] = useState(0);

  return (
    <View style={styles.box}>
      <View style={styles.title}>
        <View style={styles.icon}><Ionicons name='md-stats'size={20} color={'green'}/></View>
        <View>
          <Text style={{fontSize: 18}}>Statistics</Text>
        </View>
      </View>
      <View style={styles.info} >
        <View style={styles.infoAll}>
          <Text style={{color: 'violet'}}>Confirmed</Text>
          <Text>{confirmed2}</Text>
          <Text style={{color: 'yellow', paddingTop: 15}}>Active</Text>
          <Text>{active}</Text>
        </View>
        <View style={styles.infoAll}>
          <Text style={{color: 'green'} }>Recovered</Text>
          <Text>{recovered2}</Text>
          <Text style={{color: 'red', paddingTop: 15}}>Critical</Text>
          <Text>{critical}</Text>
        </View>
        <View style={{flex:1, alignItems: 'center'}}>
          <Text style={{color: 'red'}}>Deaths</Text>
          <Text>{deaths2}</Text>
          <Text style={{color: 'purple', paddingTop: 15}}>Tests</Text>
          <Text>{tests}</Text>
        </View>
      </View>
    </View>
  )}

  const styles = StyleSheet.create({
    box: {
      paddingTop: 8,
      height: 150,
      borderRadius: 5,
      backgroundColor: 'white',
      marginVertical:10,    
    },
    title: {
      paddingLeft:8,
      flexDirection: 'row',
      color: 'green'
    },
    icon: {
      paddingHorizontal: 5,
      justifyContent: 'center',
    },
    info: {
      paddingTop: 5,
      justifyContent: 'center',
      alignItems: 'center',
      flex:3,
      flexDirection: 'row'
    },
    infoAll: {
      flex:1,
      alignItems: 'center',
      borderRightColor: 'gray',
      borderRightWidth:1
    }
    
  })