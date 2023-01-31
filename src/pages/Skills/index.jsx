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
                <div className="md:w-1/2">
                    <p className="pt-1 leading-7">
                        I am confident that I am strong strong in front-end
                        development including technologies like
                        <span className="text-green-500">
                            {' '}
                            HTML5, CSS3, Javascript, ReactJS, TypeScript,
                            NextJS, jQuery, Tailwind, Boostrap, Git.
                        </span>
                    </p>
                    <p className="pt-1 leading-7">
                        Although I am not a professional designer, I can use
                        Figma and Balsamiq fluently. Also, I know some basic
                        UI/UX knowledge.
                    </p>
                    <p className="pt-1 leading-7">
                        Other programming languages that I am able to use:
                        Python, C/C++, PHP. I also know how to use databases
                        like MySQL, SQL Server.
                    </p>
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
