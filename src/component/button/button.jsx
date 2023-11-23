import React, { useState } from "react";
import './button.scss';




function Button({ classNameBtn, textContentBtn, onClick }) {


    return (
        <>
            <button onClick={onClick} className={`${classNameBtn} custom-btn btn-4`}><span>{textContentBtn}</span></button>
        </>

    )
}

export default Button;