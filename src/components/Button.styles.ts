
import styled from "styled-components";

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonConatinerProps {
    variant:ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonConatiner = styled.button<ButtonConatinerProps>`
    width: 100px;
    height: 40px;
    border-radius: 4px;
    border: 0;
    margin: 8px;
    color: ${props => props.theme["gray-100"]};
    background-color: ${props => props.theme["green-500"]};
/* 
    ${props => {
        return `background-color: ${buttonVariants[props.variant]}`
    }} */
`