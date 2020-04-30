import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>COVID-19</Text>
      <Text style={styles.headerText}>Worldwide</Text>
    </View>

  )}

  const styles = StyleSheet.create({
    header: {
      height:80,
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
      backgroundColor: 'white',
      marginTop:20,
      paddingTop:20
    },
    headerText: {
      fontSize:20,
      fontWeight:'bold',
      paddingLeft: 8

    }
  });