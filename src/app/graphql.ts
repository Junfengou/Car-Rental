import { ApolloClient, InMemoryCache } from "@apollo/client"


// Wrap this on the global level of the app, usually in the [index.tsx] level

// You can treat it like Context api 


// You can have multiple requests that hits different uris....personal perference I guess
export const apolloClient = new ApolloClient({
    // uri: REACT_API_URL as any,
    uri: `${process.env.REACT_APP_API_URL}/graphql` as any,
    cache: new InMemoryCache(),
})