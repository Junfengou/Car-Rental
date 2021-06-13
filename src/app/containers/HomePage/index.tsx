import React from 'react';
import styled from "styled-components";
import tw from "twin.macro"
import BookCard from '../../components/bookCard';
import Navbar from "../../components/navbar/index"
import TopSection from "./topSection"
import { Marginer } from "../../components/marginer/index"
import BookingSteps from "./bookingSteps"
import AboutUs from "./aboutUs"
import TopCars from "./topCars"

function HomePage() {
    return (
        <PageContainer>
            <Navbar />
            <TopSection />
            <Marginer direction="vertical" margin="4em" />

            <BookCard />
            <Marginer direction="vertical" margin="10em" />
            
            <BookingSteps />
            <Marginer direction="vertical" margin="8em" />

            <AboutUs />
            <Marginer direction="vertical" margin="8em" />

            <TopCars />
        </PageContainer>
    )
}

export default HomePage


const PageContainer = styled.div`
  ${tw`
      flex
      flex-col
      w-full
      h-full
      items-center
      overflow-x-hidden
  `}
`;