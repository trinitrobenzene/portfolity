import React from 'react';
import AnimatedLetter from '../Home/AnimatedLetter';
import Portrait from '../../assets/portrait.jpg';

const About = () => {
    const content = 'About me'.split('');
    return (
        <div className="p-8">
            <h1 className="font-black">
                <AnimatedLetter letter={'text-animate'} str={content} idx={5} />
            </h1>
            <div className='md:grid grid-cols-3 gap-8 py-4'>
                <div className="col-span-2 text-justify md:pr-20">
                    <div className="animate__animated animate__fadeIn animate__delay-2s">
                        <p className="pb-1 leading-7">
                            I am a student in the computer science and engineering
                            department of the Ho Chi Minh City University of
                            Technology. I am learning how to be an aspiring
                            front-end developer and looking for a role in an IT
                            company to have the opportunity to work with the latest
                            technologies on diverse and challenging projects.
                        </p>
                        <p className="pb-1 leading-7">
                            With a solid knowledge base, I am always confident in
                            myself. My short term goal is to be a excellent
                            front-end developer. After that, I will continue to
                            study to become a full-stack developer.
                        </p>
                        <div className="pb-1 leading-7">
                            <p>Some of my little projects:</p>
                            <ul className="pl-4 list-disc">
                                <li>
                                    <a
                                        href="https://dictionary-tnb.netlify.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:underline text-blue-400"
                                    >
                                        Dictionary app
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://pokemondb-tnb.netlify.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:underline text-blue-400"
                                    >
                                        Pokemon Database Clone
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 rounded-md shadow-xl px-4 py-8 eevee">
                    <img
                        alt=""
                        src={Portrait}
                        className="rounded-full mx-auto border border-gray-200 w-4/5"
                    />
                    <div className="text-center">
                        <h4 className="font-bold">Buu Tran Nhu</h4>
                        <p className="text-gray-400">Front-end developer</p>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default About;
