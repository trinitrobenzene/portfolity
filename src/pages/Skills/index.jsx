import React from 'react';
import AnimatedLetter from '../Home/AnimatedLetter';
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiTypescript, SiMysql } from 'react-icons/si';
import './skill.scss';

const Skill = () => {
    const content = 'Skills & Experience'.split('');
    return (
        <div className="p-8 relative grow">
            <h1 className="font-black">
                <AnimatedLetter letter={'text-animate'} str={content} idx={7} />
            </h1>
            <div className="py-4 text-justify md:flex">
                <div className="md:w-1/2 tracking-wide leading-7 animate__animated animate__fadeIn animate__delay-1s">
                    <div>
                        <p>
                            I am confident that I am strong strong in frontend
                            development including technologies like
                            <span className="text-green-500">
                                {' '}
                                HTML5, CSS3, Javascript, TypeScript, ReactJS,
                                NextJS, jQuery, Tailwind, Boostrap, Git.
                            </span>
                        </p>
                        <p>
                            Although I am not a professional designer, I know
                            basic UI/UX knowledge and can use Figma and Balsamiq
                            fluently.
                        </p>
                        <p>
                            Other programming languages that I am able to use:
                            Python, C/C++, PHP. I also know how to work with databases
                            like MySQL, SQL Server.
                        </p>
                    </div>
                    <div className="pt-2">
                        <p>
                            On the other hand, I have more than 4 months of
                            internship experience in ReactJS at FPT Software and
                            have obtained the ReactJS Level 1 certificate issued
                            by Interstate 21.
                        </p>
                        <p>
                            You can check here:{' '}
                            <a
                                href="https://certification.interstate21.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:underline text-blue-400"
                            >
                                https://certification.interstate21.com/
                            </a>
                            , with code <b>4B19P79</b> or here: {' '}
                            <a
                                href="https://tinyurl.com/reactctf"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:underline text-blue-400"
                            >
                                https://tinyurl.com/reactctf
                            </a>
                            .
                        </p>
                    </div>
                </div>
                <div className="cube-container">
                    <div className="cube-spinner">
                        <div className="face-1">
                            <FaHtml5 size={120} />
                        </div>
                        <div className="face-2">
                            <FaCss3 size={120} />
                        </div>
                        <div className="face-5">
                            <FaJs size={120} />
                        </div>
                        <div className="face-4">
                            <FaReact size={120} />
                        </div>
                        <div className="face-3">
                            <SiTypescript size={120} />
                        </div>
                        <div className="face-6">
                            <SiMysql size={64} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
