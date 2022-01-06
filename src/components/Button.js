import React from 'react';

import "./Button.css";

const STYLE = ["btn--full", "btn--outline"]
const SIZE = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];
const COLOR = ["primary", "red", "green"]; 

export const Button =({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize, 
    buttonColor

}) => {

    const checkButtonStyle = STYLE.includes (buttonStyle) ? buttonStyle : STYLE[0]
    const checkButtonSize = SIZE.includes (buttonSize) ? buttonSize : SIZE[0]
    const checkButtonColor = COLOR.includes (buttonColor) ? buttonColor : null;

    return (
        <button 
        /*1*/ className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} 
        /*2*/ onClick={onClick} type={type}>
        {/*3*/} {children}</button>
        )

        // 1 - Il ajoute les classes par défaut (position 0 du tableau) si il n'y a pas de classe de définie spécifiquement.
        // 2 - OnClick et type sont le event listener et les propriétés du bouton qui sont générées grâce au fait de passer ces props ici
        // 3 - Children correspond à ce qu'on va noter dans l'intitulé du bouton ("Contact"). 

}