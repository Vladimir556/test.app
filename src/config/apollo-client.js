import { ApolloClient , createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink  = createHttpLink({
    uri: 'https://api.spacex.land/graphql/'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export default client
