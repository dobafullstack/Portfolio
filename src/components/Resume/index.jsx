import React, { useEffect, useState } from "react";
import { TopTitle } from "../Common";
import "../../assets/sass/resume.scss";
import { Sidebar } from "./Sidebar";
import Education from "./Education";
import Experience from "./Experience";
import Skill from "./Skill";
import Project from "./Project";
import Interest from "./Interest";

export default function Resume() {
    const ref = React.createRef();
    const educationRef = React.createRef();
    const [selected, setSelected] = useState("education");

    const onScroll = (top) => {
        ref.current.scroll({
            top,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        ref.current.addEventListener("scroll", (event) => {
            const location = event.path[0].scrollTop;
            if (location < 950) {
                setSelected("education");
            }
            if (location >= 950) {
                setSelected("experience");
            }
            if (location >= 1900) {
                setSelected("skills");
            }
            if (location >= 2850) {
                setSelected("projects");
            }
            if (location >= 3800) {
                setSelected("interest");
            }
        });
    }, [ref]);

    return (
        <div className='resume-wrapper' id='resume'>
            <TopTitle title='Resume' subTitle='My formal Bio details' />
            <div className='resume'>
                <Sidebar
                    onScroll={onScroll}
                    selected={selected}
                    setSelected={setSelected}
                />
                <div className='right-side' ref={ref}>
                    <Education educationRef={educationRef} />
                    <Experience />
                    <Skill />
                    <Project />
                    <Interest />
                </div>
            </div>
        </div>
    );
}
