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
        continent
        result {
            tests
            cases
            todayCases
            deaths
            todayDeaths
            recovered
            active
            critical
            casesPerOneMillion
            deathsPerOneMillion
            testsPerOneMillion
            updated
        }
    }
}

  `;

export default get_stats;