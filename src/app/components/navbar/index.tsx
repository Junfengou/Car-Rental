import React from 'react'
import styled from "styled-components"
import tw from "twin.macro"
import Logo from "../logo/index"
import NavItems from "../navbar/navItems"

function Navbar() {
    return (
        <NavbarContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>

            <NavItems />
        </NavbarContainer>
    )
}

export default Navbar


const NavbarContainer = styled.div`
    min-height: 68px;
    ${tw`
        w-full
        max-w-screen-2xl // max screen width predefined manually inside tailwind.config.js
        flex
        flex-row
        items-center
        lg:pl-12 // media query
        lg:pr-12
        justify-between
    `}
    /* border: solid red; */
    padding: 0 2rem;
`

const LogoContainer = styled.div`
    /* ${tw`

    `} */
`