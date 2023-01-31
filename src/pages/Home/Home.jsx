import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedLetter from './AnimatedLetter';
import './Home.scss';

const Home = () => {
    const letter = 'text-animate';
    const content = "Hi, I'm Buu Tran Nhu".split('');
    const navigate = useNavigate();
    return (
        <div className="p-8 flex flex-col md:flex-row">
            <div className="grow">
                <h1 className="font-black">
                    <AnimatedLetter letter={letter} str={content} idx={7} />
                </h1>
                <div className="pr-10 animate__animated animate__fadeIn animate__delay-2s">
                    <p className='tracking-wide py-4'>
                        The reason that I want to be a front-end developer is
                        because I like color, art, and the way everything works together
                        to create harmony.
                    </p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="to-contact"
                    >
                        Contact me
                    </button>
                </div>
            </div>
            <div className="md:w-1/4">
                <img
                    className="eevee"
                    alt=""
                    src="https://i.pinimg.com/750x/29/c4/98/29c4986cd97659d12849e45e9e0c316a.jpg"
                />
            </div>
        </div>
    );
};

export default Home;
