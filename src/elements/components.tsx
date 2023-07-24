import React from 'react';

interface TextProps {
  content: string;
}

interface CheckBoxProps {
    type: string;
    checked: boolean;
    change: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ButtonProps{
    content: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    id: string;
}

const CheckBox: React.FC<CheckBoxProps> = (props) => <input type={props.type}  checked={props.checked} onChange={props.change}></input>

const TextCheck: React.FC<TextProps> = (props) => <h5>{props.content}</h5>

const Button: React.FC<ButtonProps> = (props) => <button id={props.id} onClick={props.onClick}>{props.content}</button>

export { CheckBox, TextCheck, Button};
