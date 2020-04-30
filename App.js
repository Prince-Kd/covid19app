import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './components/header';
import Stats from './components/stats';
import Countries from './components/countries';
import Statistics from './components/statistics';
import ApolloClient from 'apollo-boost';
import get_stats from './queries';
import { ApolloProvider } from "@apollo/react-hooks";


export default function App() {

  const client = new ApolloClient({
    uri: 'https://covid19-graphql.netlify.app/'
  });
  
  const date = (Date()).toString();
  const[data, setData] = useState([]);
  //const { loading, error, data } = useQuery(get_stats);

  useEffect(
    function requestData() {
      client.query({
        query: get_stats
      })
      .then(response => {
        console.log(response);
        //console.log(response)
      })
      .catch(error => {
        console.log('ERROR ==>', error)
      })
    }, []
  );
 


  
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Header/>
        <Stats/>
        <Countries />
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
