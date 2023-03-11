import React from 'react';
import img1 from '../../assets/movie/1.png';
import img2 from '../../assets/movie/2.png';
import img3 from '../../assets/movie/3.png';
import img4 from '../../assets/movie/4.png';
import Carousel from '../../components/Carousel';

const Movie = () => {
    return (
        <div>
            <p>
                Galaxy Cinema-based movie showtimes and online booking site.
                Here you can find showtimes by cinema name, movie name, ticket
                and seat booking.
            </p>
            <p>
                Link demo:{' '}
                <a
                    href="https://cinema-red.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline text-blue-400"
                >
                    https://cinema-red.vercel.app/
                </a>
            </p>
            <div className="pt-8">
                <Carousel autoSlide={true}>
                    {[img1, img2, img3, img4].map((_, i) => (
                        <img src={_} key={i} alt="" />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Movie;
