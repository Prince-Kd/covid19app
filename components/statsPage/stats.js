import React, {useState} from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from '@apollo/react-hooks';
import get_stats from './queries'


export default function Stats() {
  const { loading, error, data } = useQuery(get_stats);
  const [confirmed1, setConfirmed ] = useState(0);
  const [recovered1, setRecovered ] = useState(0);
  const [deaths1, setDeaths ] = useState(0);

  return (
    <View style={styles.statistics}>
      <View style={styles.title}>
        <View style={styles.icon}><Ionicons name='md-globe'size={15}/></View>
        <View>
          <Text>Worldwide Statistics</Text>
        </View>
      </View>
      <View style={styles.info} >
        <View style={styles.infoAll}>
          <Text style={{color: 'violet'}}>Confirmed</Text>
          <Text  >{confirmed1}</Text>
        </View>
        <View style={styles.infoAll}>
          <Text style={{color: 'green'} }>Recovered</Text>
          <Text>{recovered1}</Text>
        </View>
        <View style={{flex:1, alignItems: 'center'}}>
          <Text style={{color: 'red'}}>Deaths</Text>
          <Text>{deaths1}</Text>
        </View>
      </View>
    </View>

  )}

  const styles = StyleSheet.create({
    title: {
      paddingLeft:8,
      flexDirection: 'row',
      
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
    },
    statistics: {
      paddingTop: 8,
      flexDirection:'column',
      height:100,
      backgroundColor: 'white',
      marginVertical:10,
      borderRadius: 5
      }

  })