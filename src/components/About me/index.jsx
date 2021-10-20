import React from "react";
import { TopTitle } from "../Common";
import "../../assets/sass/about.scss";
import Avatar from '../../assets/images/doba.jpg'
import { facebookLink } from "../../constant/url";

export default function index() {
    return (
        <div className='about-wrapper' id="about">
            <TopTitle title='About me' subTitle='Why choose me?' />

            <div className='main'>
                <div className='left-side'>
                    <img src={Avatar} alt='' />
                </div>
                <div className='right-side'>
                    <p className='introduce'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                    </p>
                    <p>Here are a few highlights:</p>
                    <ul className='list-highlight'>
                        <li>
                            <div className='circle'></div>
                            <span>Highlight 1</span>
                        </li>
                        <li>
                            <div className='circle'></div>
                            <span>Highlight 2</span>
                        </li>
                        <li>
                            <div className='circle'></div>
                            <span>Highlight 3</span>
                        </li>
                    </ul>
                    <div className='button-wrapper'>
                        <a className='hire' href={facebookLink}>Hire me</a>
                        <a
                            className='resume'
                            href='../../utils/Nguyen-Duy-Anh-CV.pdf'
                            download>
                            Get Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
