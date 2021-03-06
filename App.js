import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './components/header';
import Stats from './components/stats';
import Countries from './components/countries';
import Statistics from './components/statistics';
import ApolloClient from 'apollo-boost';
import get_stats from './queries';
import { ApolloProvider } from "@apollo/react-hooks";


export default function App(props) {

  const client = new ApolloClient({
    uri: 'https://covid19-graphql.netlify.app/'
  });
  
  const date = (Date()).toString();
  const[data, setData] = useState([]);
  
  //const { loading, error, data } = useQuery(get_stats);

  useEffect(() =>{
    const requestData = async () => {
      client.query({
        query: get_stats,
      })
      .then(response => { 
        setData(response.data.countries)
      })
      .catch(error => {
        console.log('ERROR ==>', error)
      })
    }

    requestData();
  }, [data])
 
//console.log(data);

  
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Header/>
        <Stats stats = {data}/>
        <Countries countries = {data}/>
        <Statistics statistics = {data}/>
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
