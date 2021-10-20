import React from "react";
import "../../assets/sass/top-title-wrapper.scss";

export const TopTitle = (props) => {
    return (
        <div className='top-title-wrapper'>
            <h1>{props.title}</h1>
            <p>{props.subTitle}</p>
        </div>
    );
};
