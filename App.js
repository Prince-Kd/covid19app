import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Header from './components/header';
import Stats from './components/statsPage/stats';
import Countries from './components/country/countries';
import Statistics from './components/statistics';

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://covid19-graphql.netlify.app/'
});

import { ApolloProvider } from '@apollo/react-hooks';

// You can import from local files
import AssetExample from './components/AssetExample';

export default function App() {
  const date = (Date()).toString();
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Header/>
        <Stats/>
        <Countries/>
        <Statistics/>
        <Text style={{textAlign:'right'}}>Last Updated:{date}</Text>
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#f5f5f5',
    padding: 8,
  }
});
