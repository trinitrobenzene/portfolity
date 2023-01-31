import React from 'react';

const AnimatedLetter = ({ letter, str, idx }) => {
    return (
        <>
            {str.map((char, i) => (
                <span key={char + i} className={`${letter} _${i + idx}`}>
                    {char}
                </span>
            ))}
        </>
    );
};

export default AnimatedLetter;
