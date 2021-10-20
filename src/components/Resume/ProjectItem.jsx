import React from 'react'

export default function ProjectItem({title, time, subTitle, content}) {
    return (
        <div className='project-item'>
            <div className='header'>
                <div className='d-flex align-items-center'>
                    <div className='circle'></div>
                    <span>{title}</span>
                </div>
                <div className="time">{time}</div>
            </div>
            <p className="sub-title">{subTitle}</p>
            <p className="content">{content}</p>
        </div>
    );
}
