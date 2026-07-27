/** @type {import('tailwindcss').Config} */
//Tailwind 3, matching the class names the page already uses. Do not move to 4 without rewriting them:
//v4 renamed a lot of utilities (bg-gradient-to-r -> bg-linear-to-r, flex-grow -> grow, and so on), so
//the page would come out unstyled in places rather than failing loudly.
module.exports = {
    //Scanned to decide which utilities to emit. Anything not mentioned in a file listed here is dropped,
    //so a new markup file has to be added here or its classes will silently have no effect.
    content: ['./index.html'],
    theme: {
        //The page was built against the stock theme with no customisation, so there is nothing to extend.
        extend: {}
    },
    plugins: []
}
