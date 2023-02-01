import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetter from '../Home/AnimatedLetter';
import './style.scss';

const Contact = () => {
    const content = 'Contact'.split('');
    const contactForm = useRef();
    const handleSendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_dc8djx6',
                'template_56bx1js',
                contactForm.current,
                'Gfs4ytsvP5GKPKvs3'
            )
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again');
                }
            );
    };
    return (
        <div className="p-8">
            <h1 className='font-black'>
                <AnimatedLetter str={content} idx={5} letter={'text-animate'} />
            </h1>
            <div className="md:grid grid-cols-2 gap-8">
                <div className="py-4 pr-6 col-span-1">
                    <p className="text-justify">
                        I am interested in frontend work opportunities. So, if
                        you have other requests or questions, you can contact me
                        by using the form below or via following ways:
                    </p>
                    <ul className="contact-via list-disc">
                        <li>
                            Email:{' '}
                            <a href="mailto:trannhubuu1412@gmail.com">
                                trannhubuu1412@gmail.com
                            </a>
                        </li>
                        <li>
                            Facebook:{' '}
                            <a
                                href="https://www.facebook.com/Articuno.012/"
                                target={'_blank'}
                                rel="noreferrer"
                            >
                                Trần Như Bửu
                            </a>
                        </li>
                        <li>
                            Github:{' '}
                            <a
                                href="https://github.com/trinitrobenzene"
                                target={'_blank'}
                                rel="noreferrer"
                            >
                                trinitrobenzene
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="py-4 col-span-1">
                    <form ref={contactForm} onSubmit={handleSendEmail}>
                        <div className="form-input">
                            <label htmlFor="name">Name</label>
                            <input name="name" placeholder="Your name" required/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Your email"
                                required
                            />
                        </div>
                        <div className="form-input">
                            <label htmlFor="subject">Subject</label>
                            <input name="subject" placeholder="Subject" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="mess">Message</label>
                            <textarea name="mess" placeholder="Message" required/>
                        </div>
                        <div className="form-input">
                            <input
                                type="submit"
                                value="Send"
                                className="send-btn"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
