import React from 'react';
import img1 from '../../assets/pokemon/1.png';
import img2 from '../../assets/pokemon/2.png';
import img3 from '../../assets/pokemon/3.png';
import Carousel from '../../components/Carousel';

const Pokemon = () => {
    return (
        <div>
            <p>
                Website looking up information about Pokemon. Here you can see
                information, stats, abilities, evolution line or even natures of
                particular Pokemon, system of moves, correlation of types with
                each other.
            </p>
            <p>
                Link demo:{' '}
                <a
                    className="hover:underline text-blue-400"
                    href="https://pokemondb-tnb.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    https://pokemondb-tnb.netlify.app/
                </a>
            </p>
            <div className="pt-8">
                <Carousel autoSlide={true}>
                    {[img1, img2, img3].map((_, i) => (
                        <img src={_} key={i} alt="" />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Pokemon;
