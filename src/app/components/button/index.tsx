import React from 'react'
import styled from "styled-components"
import tw from "twin.macro"

interface IButtonProps {
    theme?: "filled" | "outlined";
    text: string;
    className?: string;
}

function Button(props: IButtonProps) {
    const { theme, text, className  } = props

    return(
        <>
        {theme ? <FilledButton className={className}>{text}</FilledButton> : <OutlineButton className={className}>{text}</OutlineButton>}
        </>
    )
}

// if (theme === "filled")
//     return <FilledButton className={className}>{text}</FilledButton>;
//     else return <OutlineButton className={className}>{text}</OutlineButton>;

export default Button


const BaseButton = styled.button`
    // most important thing about button style is padding according to some random guy on YT lol
    ${tw`
        pl-5
        pr-5
        pt-3
        pb-3
        outline-none
        rounded-md
        text-white
        text-xs
        font-semibold
        border-transparent  // must have whenever you have border animation cause it plays a huge role in width and height
        border-2    // 2px all sides
        border-solid
        focus:outline-none
        transition-all
        duration-200
        ease-in-out
        m-1
    `}
`

// extending the style from [BaseButton] above
const OutlineButton = styled(BaseButton)`
    ${tw`
        bg-red-500
        hover:bg-transparent
        hover:text-red-500
        hover:border-red-500
    `}
`

const FilledButton = styled(BaseButton)`
    ${tw`
        border-red-500
        text-red-500
        bg-transparent
        hover:bg-red-500
        hover:text-white
        hover:border-transparent
    `}
`