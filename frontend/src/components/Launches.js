import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
  {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  return (
    <>
      <h1>Launches</h1>
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);
          return (
            <div>
              {data.launches.map(item => (
                <LaunchItem launch={item} key={item.flight_number} />
              ))}
            </div>
          );
        }}
      </Query>
    </>
  );
};

export default Launches;