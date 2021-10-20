import React from "react";
import { Icon } from "../Common";
import "../../assets/sass/home.scss";
import Avatar from "../../assets/images/doba.jpg";
import Typical from "react-typical";
import { facebookLink, instagramLink } from "../../constant/url";

const Home = () => {
    return (
        <div className='home-wrapper' id="home">
            <div className='header'>
                <a href={facebookLink} target='_blank' rel="noreferrer">
                    <Icon facebook />
                </a>
                <a href={instagramLink} target='_blank' rel="noreferrer">
                    <Icon instagram />
                </a>
            </div>
            <div className='body'>
                <div className='left-side'>
                    <h2>Hello, I'm Doba</h2>
                    <Typical
                        steps={[
                            "Web developer",
                            1000,
                            "ReactJS",
                            1000,
                            "NextJS",
                            1000,
                        ]}
                        loop={Infinity}
                        wrapper='h1'
                    />
                    <p>
                        Knack of building web applications with front and back
                        end operations
                    </p>
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
                <div className='right-side'>
                    <img src={Avatar} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Home;
