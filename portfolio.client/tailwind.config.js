/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                text: {
                    dark: "#FFFFFF",
                    light: "#000000",
                },
                background: {
                    dark: "#110B13",
                    light: "#F2ECF4",
                },
                primary: {
                    dark: "#64008F",
                    light: "#D470FF",
                },
                secondary: {
                    dark: "#1F1424",
                    light: "#E6DBEB",
                },
                accent: {
                    dark: "#719F5B",
                    light: "#719F5B",
                }
            }
        }
   },
  plugins: [],
}