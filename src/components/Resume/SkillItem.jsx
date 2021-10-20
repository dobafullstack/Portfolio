import React from 'react'

export default function SkillItem({title, percent}) {
    return (
        <div className='skill-item'>
            <div className='header'>
                <div className='circle'></div>
                <span>{title}</span>
            </div>
            <div className="process">
                <div className="percent" style={{flexGrow: percent}}></div>
                <div className="rest" style={{flexGrow: 100 - percent}}></div>
            </div>
        </div>
    );
}
