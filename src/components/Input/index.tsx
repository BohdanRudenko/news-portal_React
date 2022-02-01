import React from "react";

interface IInputParams {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<IInputParams> = ({ onChange, placeholder }) => (
  <input onChange={onChange} placeholder={placeholder} />
);

export default Input;