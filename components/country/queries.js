import {gql} from 'apollo-boost';

const Get_Countries = gql`
    {
    countries {
        country
        countryInfo {
            _id
            lat
            long
            flag
            iso3
            iso2
        }
      }  
}
  `;

export default Get_Countries;