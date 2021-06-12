import React from 'react';
import styled from "styled-components";
import tw from "twin.macro"
import Navbar from "../../components/navbar/index"
import TopSection from "./topSection"

function HomePage() {
    return (
        <PageContainer>
            <Navbar />
            <TopSection />
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