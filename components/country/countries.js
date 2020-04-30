import React, {useState} from 'react';
import {useQuery} from '@apollo/react-hooks';
import { Text, View, StyleSheet, Image, Picker} from 'react-native';
import Get_Countries from './queries';

export default function Countries () {
  const [selectedCountry, setCountry] = useState(null);
  const { loading, error, data } = useQuery(Get_Countries);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <View>
      <Text style={{paddingBottom:2}}>Select Country:</Text>
      <View style={styles.picker}>
        <Picker
          selectedCountry = {selectedCountry}
          onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}>
          {
            data.countries.map((country, index) => {
            <Picker.Item  label={country.country} value={selectedCountry} />
            })
          }
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
