// Serve as dependency injection that can be injected into any components

import { apolloClient } from "../../graphql";
import { GET_ALL_CARS } from "./queries";
import { getCars_cars } from "./__generated__/getCars";

class CarService {
     async getCars(): Promise<getCars_cars[]> {
         // We ask the apolloClient to fetch a query for us and catch the error if it happens
        const response = await apolloClient.query({ query: GET_ALL_CARS}).catch(err => {
            throw err; 
        })

        // if the response comes back and there is data, we will return the data as type Array
        if(response && response.data) 
            return response.data as getCars_cars[];

        // Otherwise you get this lol
        return [];
     }
}

export default new CarService();


// Do this and Apollo will generate a list of type for you in development when you run the query

// const location = "folder location you want the generated type to live in your project"

/*
    [package.json]
      "scripts": {
        "dev": "craco start",
        "build": "craco build",
        "test": "craco test",
        "eject": "react-scripts eject"
        "schema:download": "npx apollo service:download --endpoint=[your server endpoint] [location]",
        "schema:generate-watch": "npx apollo codegen:generate --localSchemaFile=[location] --target=typescript --tagName=gql --watch"
    },

    (Make sure to download Apollo CLI first!!!) [npm install -D apollo]
    then run this command : [npm run schema:download] - this will generate a json file 
    (Also make sure the backend is running)
    then run this command: [npm run schema:generate-watch]

*/