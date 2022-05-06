import { merge } from 'lodash'
import { gql, ApolloServer } from 'apollo-server'
import {
  typeDef as User,
  resolvers as userResolvers
} from './user'

import {
  typeDef as Message,
  resolvers as messageResolvers
} from './message'

const Query = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  type Subscription {
    _empty: String
  }
`
export const schema = startApolloServer({
  typeDefs: [Query, User, Message],
  resolvers: merge(userResolvers, messageResolvers)
})
