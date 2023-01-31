/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                secondary: '#242424'
            },
            fontFamily : {
                "primary" : ["'Source Sans Pro'", 'sans-serif']
            }
            
        },
    },
    plugins: [],
};
