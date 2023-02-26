import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedLetter from './AnimatedLetter';
import Portrait from '../../assets/portrait.jpg';
import './Home.scss';

const Home = () => {
    const letter = 'text-animate';
    const content = "Hi, I'm Tran Nhu Buu".split('');
    const navigate = useNavigate();
    return (
        <div className="p-8 ">
            <h1 className="font-black">
                <AnimatedLetter letter={letter} str={content} idx={7} />
            </h1>
            <div className="flex flex-col md:flex-row">
                <div className="lg:w-3/4 md:w-1/2 md:pr-6">
                    <div className="md:pr-10 animate__animated animate__fadeIn animate__delay-1s text-justify">
                        <div className="tracking-wide py-3">
                            The reason that I want to be a front-end developer
                            is because I like color, art, and the way everything
                            works together to create harmony.
                        </div>
                        <div>
                            My goals for the future:
                            <ul className="list-disc pl-8">
                                <li>
                                    Short-term: Direct contact with projects to
                                    learn more and improve my programming
                                    skills. In the next year, I will learn and
                                    master about Angular and VueJS.
                                </li>
                                <li>
                                    Long-term: learn more about NodeJS and
                                    database management systems, AWS cloud
                                    system and become fullstack developer.
                                </li>
                            </ul>
                        </div>
                        <button
                            onClick={() => navigate('/contact')}
                            className="to-contact"
                        >
                            Contact me
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 eevee rounded-md shadow-md p-4">
                    <img
                        alt=""
                        src={Portrait}
                        className="rounded-full mx-auto border border-gray-200 w-4/5"
                    />
                    <div className="text-center">
                        <h4 className="font-bold border-b border-gray-200 w-fit m-auto">
                            Buu Tran Nhu
                        </h4>
                        <p className="text-gray-400">Frontend developer</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
