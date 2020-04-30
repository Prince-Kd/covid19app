import gql from 'graphql-tag';
import GraphQl from 'graphql';
import { useQuery } from '@apollo/react-hooks';
import React, {useState} from 'react';
import {Picker} from 'react-native';


const GET_DOGS = gql`
    {
    countries {
      countryName
    }
  }
  `;

export default function Country() {
  const { loading, error, data } = useQuery(GET_DOGS);
  const [selectedValue, setSelectedValue] = useState(null);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <Picker selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          {
            data.countryName.map(country => (
            <Picker.Item label={country} value={country} />
          ))
          }
    </Picker>
  );
}
 
