import React from "react";
import InterestItem from "./InterestItem";

export default function Interest({ title, content }) {
    return (
        <div className='resume-item interest'>
            <InterestItem title="Coding" content="Lorem ipsum"/>
            <InterestItem title="Music" content="Lorem ipsum"/>
            <InterestItem title="Swimming" content="Lorem ipsum"/>
            <InterestItem title="Reading" content="Lorem ipsum"/>
        </div>
    );
}
