import { GraphQLSchema } from 'graphql';

import RootQuery from './types/RootQuery';

export default new GraphQLSchema({
  query: RootQuery
});
