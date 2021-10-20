import React from 'react'

export default function Education({ educationRef }) {
    return (
        <div
            className='education resume-item'
            id='education'
            ref={educationRef}>
            <h1>Education</h1>
            <div className='item-wrapper'>
                <div className='item'>
                    <div className='head-wrapper'>
                        <div className='item-head'>
                            <div className='circle'></div>
                            <p>High school</p>
                        </div>
                        <div className='time'>2016-2018</div>
                    </div>
                    <p className='info'>Phan Ngoc Hien High school</p>
                </div>
                <div className='item'>
                    <div className='head-wrapper'>
                        <div className='item-head'>
                            <div className='circle'></div>
                            <p>University</p>
                        </div>
                        <div className='time'>2018-2022</div>
                    </div>
                    <p className='info'>
                        Ho Chi Minh City University of Foreign Languages –
                        Information Technolog
                    </p>
                </div>
            </div>
        </div>
    );
}
