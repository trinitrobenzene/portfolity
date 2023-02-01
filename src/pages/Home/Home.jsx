import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedLetter from './AnimatedLetter';
import Portrait from '../../assets/portrait.jpg';
import './Home.scss';

const Home = () => {
    const letter = 'text-animate';
    const content = "Hi, I'm Buu Tran Nhu".split('');
    const navigate = useNavigate();
    return (
        <div className="p-8 ">
            <h1 className="font-black">
                <AnimatedLetter letter={letter} str={content} idx={7} />
            </h1>
            <div className="flex flex-col md:flex-row">
                <div className="lg:w-3/4 md:w-1/2 md:pr-6">
                    <div className="md:pr-10 animate__animated animate__fadeIn animate__delay-2s">
                        <p className="tracking-wide py-4 text-justify">
                            The reason that I want to be a front-end developer
                            is because I like color, art, and the way everything
                            works together to create harmony.
                        </p>
                        <button
                            onClick={() => navigate('/contact')}
                            className="to-contact"
                        >
                            Contact me
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 eevee rounded-md shadow-xl p-4">
                    <img
                        alt=""
                        src={Portrait}
                        className="rounded-full mx-auto border border-gray-200 w-4/5"
                    />
                    <div className="text-center">
                        <h4 className="font-bold">Buu Tran Nhu</h4>
                        <p className="text-gray-400">Frontend developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
