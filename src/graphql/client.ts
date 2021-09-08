import { GraphQLClient } from 'graphql-request'

console.log('process.env.GRAPHQL_HOST ', process.env.GRAPHQL_HOST)

export const client = new GraphQLClient(process.env.GRAPHQL_HOST)
