/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCars
// ====================================================

export interface getCars_cars {
  __typename: "CarType";
  carId: string;
  name: string;
  monthlyPrice: number;
  dailyPrice: number;
  mileage: string;
  gas: string;
  gearType: string;
  thumbnailUrl: string;
}

export interface getCars {
  cars: getCars_cars[];
}
