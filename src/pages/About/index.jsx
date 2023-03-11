import React, { useState } from 'react';
import AnimatedLetter from '../Home/AnimatedLetter';
import Dictionary from './Dictionary';
import Movie from './Movie';
import Pokemon from './Pokemon';

const About = () => {
    const content = 'About me'.split('');
    const [index, setIndex] = useState(0);
    return (
        <div className="p-8" id="about">
            <h1 className="font-black">
                <AnimatedLetter letter={'text-animate'} str={content} idx={5} />
            </h1>
            <div className="animate__animated animate__fadeIn animate__delay-1s">
                <div className="md:grid grid-cols-3 gap-6 py-4">
                    <div className="col-span-1 md:pr-10">
                        <div className="pb-1 leading-7">
                            <p>Some of my small projects:</p>
                            <ul className="pl-4 list-disc">
                                <li
                                    onClick={() => setIndex(0)}
                                    className="hover:underline cursor-pointer text-blue-400"
                                >
                                    Booking Movie Tickets Online
                                </li>
                                <li
                                    onClick={() => setIndex(1)}
                                    className="hover:underline cursor-pointer text-blue-400"
                                >
                                    Dictionary app
                                </li>
                                <li
                                    className="hover:underline text-blue-400 cursor-pointer"
                                    onClick={() => setIndex(2)}
                                >
                                    Pokemon Database Clone
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-2">
                        {index === 0 && <Movie />}
                        {index === 1 && <Dictionary />}
                        {index === 2 && <Pokemon />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
