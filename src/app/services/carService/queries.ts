import { gql } from "@apollo/client";

// Make sure you name your queries
export const GET_ALL_CARS = gql`
    query getCars{
        cars {
            carId
            name
            monthlyPrice
            dailyPrice
            mileage
            gas
            gearType
            thumbnailUrl
        }
    }
`