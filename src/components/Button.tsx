import { ButtonConatiner } from "./Button.styles";

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'danger' | 'success';
}


export function Button({variant = "primary"}: ButtonProps) {
    return(
        <ButtonConatiner variant={variant}>Enviar</ButtonConatiner>        
    )
}