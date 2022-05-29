import { FC } from "react";
import './Button.css'

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    onClickArg?: (arg: any) => void;
}

const Button: FC<ButtonProps> = ({children, onClick, onClickArg}) => {
    return (
        <button className="custom-button" onClick={onClick || onClickArg} >
            {children}
        </button>
    )
}

export default Button