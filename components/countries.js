import React,{useState} from 'react';
import { Text, View, StyleSheet, Image, Picker} from 'react-native';
import {graphql} from 'react-apollo';
import get_stats from '../queries';


const Countries = () => {
  const [selectedCountry, setCountry] = useState(null)
  //console.log(data);
  return (
    <View>
      <Text style={{paddingBottom:2}}>Select Country:</Text>
      <View style={styles.picker}>
        <Picker>
        </Picker>
      </View>
    </View>
    
  )}

  const styles = StyleSheet.create({
    picker: {
      backgroundColor: 'white',
      borderRadius: 5

    }
  })

  export default Countries;