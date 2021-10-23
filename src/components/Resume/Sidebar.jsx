import React from "react";
import { Icon } from "../Common";

export const Sidebar = ({ onScroll, selected }) => {
    return (
        <div className='sidebar-wrapper'>
            <div className='left-side'></div>
            <div className='item-wrapper'>
                <div
                    className={`item ${
                        selected === "education" ? "active" : null
                    }`}>
                    <Icon
                        onClick={() => {
                            onScroll(0);
                        }}
                        education
                    />
                    <p
                        onClick={() => {
                            onScroll(0);
                        }}>
                        Education
                    </p>
                </div>
                <div
                    className={`item ${
                        selected === "experience" ? "active" : null
                    }`}>
                    <Icon
                        onClick={() => {
                            onScroll(950);
                        }}
                        history
                    />
                    <p
                        onClick={() => {
                            onScroll(950);
                        }}>
                        Work experience
                    </p>
                </div>
                <div
                    className={`item ${
                        selected === "skills" ? "active" : null
                    }`}>
                    <Icon
                        onClick={() => {
                            onScroll(1900);
                        }}
                        programing
                    />
                    <p
                        onClick={() => {
                            onScroll(1900);
                        }}>
                        Programing Skills
                    </p>
                </div>
                <div
                    className={`item ${
                        selected === "projects" ? "active" : null
                    }`}>
                    <Icon
                        onClick={() => {
                            onScroll(2850);
                        }}
                        project
                    />
                    <p
                        onClick={() => {
                            onScroll(2850);
                        }}>
                        Projects
                    </p>
                </div>
                <div
                    className={`item ${
                        selected === "interest" ? "active" : null
                    }`}>
                    <Icon
                        onClick={() => {
                            onScroll(4000);
                        }}
                        interest
                    />
                    <p
                        onClick={() => {
                            onScroll(4000);
                        }}>
                        Interests
                    </p>
                </div>
            </div>
        </div>
    );
};
