import React from 'react'
import CarLogoImg from "../../../assets/images/car-logo.png"
import styled from "styled-components"
import tw from "twin.macro"
import CarLogoDarkImg from "../../../assets/images/car-logo-dark.png";

interface ILogoProps {
    color?: "white" | "dark";
    bgColor?: "white" | "dark";
}

function Logo(props: ILogoProps) {
    const { color, bgColor } = props;
    
    return (
        <LogoContainer>
            <Image>
                <img src={bgColor === "dark" ? CarLogoDarkImg : CarLogoImg} />
            </Image>

            <LogoText>YourCar</LogoText>
        </LogoContainer>
    )
}

export default Logo


const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
    `}
    /* border: solid red; */
`

const LogoText = styled.div`
    ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1
    `}
`

const Image = styled.div`
    width: auto;
    ${tw`
        h-6
        md:h-9
    `}

    img {
        width: auto; // aspect ratio
        height: 100%;
        
    }
`