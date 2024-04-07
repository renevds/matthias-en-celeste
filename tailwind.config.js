/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                parisienne: ['Parisienne', 'cursive'],
                tenor: ['Tenor Sans', 'sans-serif'],
                openSans: ['Open Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

