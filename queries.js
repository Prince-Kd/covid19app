import {gql} from 'apollo-boost';

  const get_stats = gql`
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

export default get_stats;