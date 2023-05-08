import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri : 'https://pleased-owl-59.hasura.app/v1/graphql',
    cache : new InMemoryCache(),
    headers : {
        'x-hasura-admin-secret':'PXEdZnDlBRp8ktOr9Gw4aiNHqXevh8Bjk52Kwj3MGe90SPSsIGGTLLVIgWjQU4II'
    }
})
export default client