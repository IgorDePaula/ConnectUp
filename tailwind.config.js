module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateRows: {
                '9': 'repeat(9, minmax(0, 1fr))',
            },
            gridRow: {
                'span-9': 'span 9 / span 9',
                'span-7': 'span 7 / span 7',
            }
        },
        container: {
            center: true
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')
    ],
}
