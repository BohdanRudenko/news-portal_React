import React from "react";

interface IButtonParams {
    handleChange: () => void;
    title: string;
}

const Button: React.FC<IButtonParams> = ({ handleChange, title}) => (
    <button onClick={handleChange}>{title}</button>);

export default Button;