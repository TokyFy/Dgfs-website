/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily : {
           'primary' : ["sora"],
            'secondary' : ["Helvetica Neue"],
            'heading' : ["Georgia"]
        },

        extend: {
            keyframes: {
                slideDown: {
                    from: {height: 0},
                    to: {height: 'var(--radix-accordion-content-height)'},
                },
                slideUp: {
                    from: {height: 'var(--radix-accordion-content-height)'},
                    to: {height: 0},
                },

            },
            animation: {
                slideDown: 'slideDown 300ms ease',
                slideUp: 'slideUp 300ms ease',
            },

            colors: {
                'green': '#176B4D',
                'red': "#ea4335",
                'green-secondary' : "#F3F6F5"
            },
            backgroundImage: {
                'hero-gb': "url('/assets/hero-bg.jpeg')",
            },
        },
    },
    plugins: [],
}
