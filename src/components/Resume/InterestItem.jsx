import React from 'react'

export default function InterestItem({title, content}) {
    return (
        <div className='interest-item'>
            <div className='d-flex align-items-center header'>
                <div className='circle'></div>
                <span>{title}</span>
            </div>
            <p className='content'>{content}</p>
        </div>
    );
}
