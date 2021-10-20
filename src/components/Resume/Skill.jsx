import React from 'react';
import SkillItem from './SkillItem';
export default function Skill() {
    return (
        <div className='resume-item skill'>
            <div className='d-flex' style={{gap: "10rem"}}>
                <SkillItem title='Javascrip' percent={70} />
                <SkillItem title='HTML && CSS' percent={75} />
            </div>
            <div className='d-flex' style={{gap: "10rem"}}>
                <SkillItem title='ExpressJS' percent={80} />
                <SkillItem title='MongoDB' percent={60} />
            </div>
            <div className='d-flex' style={{gap: "10rem"}}>
                <SkillItem title='ReactJS' percent={90} />
                <SkillItem title='React Native' percent={56} />
            </div>
            <div className='d-flex' style={{gap: "10rem"}}>
                <SkillItem title='NextJS' percent={30} />
                <SkillItem title='GraphQL' percent={35} />
            </div>
            <div className='d-flex' style={{gap: "10rem"}}>
                <SkillItem title='NodeJS' percent={85} />
                <SkillItem title='.NET CORE' percent={20} />
            </div>
        </div>
    );
}
