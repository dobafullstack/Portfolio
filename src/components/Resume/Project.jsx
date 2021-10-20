import React from "react";
import ProjectItem from "./ProjectItem";

export default function Project() {
    return (
        <div className='project resume-item'>
            <ProjectItem
                title='Gundam Shopping'
                subTitle='Technologies used: NodeJS, ExpressJS, PugJS'
                time="2020-2021"
                content="An eccomerce website include: Category, Product, Cart, Admin Manager..."
            />
            <ProjectItem
                title='Airline booking'
                subTitle='Technologies used: NodeJS, ExpressJS, PugJS'
                time="2020-2021"
                content="A website that you can book an airline ticket"
            />
            <ProjectItem
                title='Pet Shopping'
                subTitle='Technologies used: MongoDB, NodeJS, ExpressJS, ReactJS with Typescript, Redux'
                time="2020-2021"
                content="An eccomerce website that sell pet and pet's accessories"
            />
            <ProjectItem
                title='Coffee Manager'
                subTitle='Technologies used: Window Form, SQL server'
                time="2020-2021"
                content="An app desktop use Window Form (C#), include: Booking, Bill, Pay, Report..."
            />
        </div>
    );
}
