import React from 'react';
import img1 from '../../assets/dictionary/1.png';
import img2 from '../../assets/dictionary/2.png';
import Carousel from '../../components/Carousel';

const Dictionary = () => {
    return (
        <div>
            <p>
                Look up the English to English dictionary for the meanings of
                the word
            </p>
            <p>
                Link demo:{' '}
                <a
                    href="https://dictionary-tnb.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline text-blue-400"
                >
                    https://dictionary-tnb.netlify.app/
                </a>
            </p>
            <div className="pt-8">
                <Carousel autoSlide={true}>
                    {[img1, img2].map((_, i) => (
                        <img src={_} key={i} alt="" />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Dictionary;
