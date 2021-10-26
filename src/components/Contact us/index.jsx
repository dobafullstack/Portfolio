import emailjs from "emailjs-com";
import { Form, Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import "../../assets/sass/contact.scss";
import {
    EMAIL_SERVICE, TEMPLATE_EMAIL,
    USER_EMAIL
} from "../../constant/email";
import { Icon } from "../Common";

export default function Contact() {
    const initialValues = {
        name: "",
        email: "",
        message: "",
    };

    const onSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(EMAIL_SERVICE, TEMPLATE_EMAIL, e.target, USER_EMAIL)
            .then(() => {
                toast.success("Thanks for you sending");
                e.target.reset();
            })
            .catch((err) => toast.error(err.message));
    };

    return (
        <div className='contact-wrapper' id='contact'>
            <div className='ellipse'></div>
            <div className='form-contact'>
                <h1>Message us</h1>
                <Formik initialValues={initialValues} >
                    {({ values, handleChange }) => (
                        <Form onSubmit={onSubmit}>
                            <input
                                type='text'
                                name='name'
                                placeholder='Your name'
                                value={values.name}
                                onChange={handleChange}
                            />
                            <input
                                type='email'
                                name='email'
                                placeholder='Your email'
                                value={values.email}
                                onChange={handleChange}
                            />
                            <textarea
                                name='message'
                                id='message'
                                cols='30'
                                rows='10'
                                placeholder='Message'
                                value={values.message}
                                onChange={handleChange}></textarea>
                            <button type='submit'>Send us</button>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className='text-wrapper'>
                <h1>Contact me</h1>

                <div className='contact-item'>
                    <Icon user="true" />
                    <p>Nguyễn Duy Anh</p>
                </div>
                <div className='contact-item'>
                    <Icon email="true" />
                    <p>dobadov3@gmail.com</p>
                </div>
                <div className='contact-item'>
                    <Icon location="true" />
                    <p>
                        11G, 22st, Binh Hung Hoa A, Binh Tan district, Ho Chi
                        Minh City
                    </p>
                </div>
            </div>
        </div>
    );
}
