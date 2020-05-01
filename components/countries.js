import React,{useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, Picker} from 'react-native';


const Countries = (props) => {
  const[country, setCountry] = useState([]);
  const countries = props.countries;

  //console.log(countries)
  return (
    <View>
      <Text style={{paddingBottom:2}}>Select Country:</Text>
      <View style={styles.picker}>
        <Picker 
        selectedValue = {country}
        onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}>
          {
            countries.map((c)=>{
              <Picker.Item label={c.country} value={c.country}/> 
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

  export default Countries;