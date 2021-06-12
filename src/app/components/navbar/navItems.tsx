import React from 'react'
import styled, {css} from "styled-components"
import tw from "twin.macro"
import { slide as Menu } from "react-burger-menu" // declare it as type in [typings] folder
import { useMediaQuery } from "react-responsive"
import {SCREENS} from "../responsive/index"
import menuStyle from './menuStyle'


function NavItems() {
    // responsive third party library that will check for the current screen size
    // anything below this screen pixel will have hamburger menu 
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })
    if(isMobile)
    return(
        <Menu right styles={menuStyle}>
            <ListContainer>
                <NavItem menu>
                    <a href="#">Home</a>
                    
                </NavItem>

                <NavItem menu>
                    <a href="#">Car</a>
                </NavItem>

                <NavItem menu>
                    <a href="#">Services</a>
                </NavItem>

                <NavItem menu>
                    <a href="#">Contact Us</a>
                </NavItem>
            </ListContainer>
        </Menu>
    );
    return (
        <ListContainer>
            <NavItem>
                <a href="#">Home</a>
                
            </NavItem>

            <NavItem>
                <a href="#">Car</a>
            </NavItem>

            <NavItem>
                <a href="#">Services</a>
            </NavItem>

            <NavItem>
                <a href="#">Contact Us</a>
            </NavItem>
        </ListContainer>
    )
}

export default NavItems


const ListContainer = styled.ul`
    ${tw`
        flex
        list-none

    `}
`

const NavItem = styled.li<{menu?: any}>`
    ${tw`
        text-sm
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `}

    /* Applying this style to hamburger menu */
    ${({menu}) => menu &&
        css`
            ${tw`
                text-white
                text-xl
                mb-3
                focus:text-white
            `}
        `
    }
`