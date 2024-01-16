import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            display: ["group-hover"],
            colors: {
                accent: "#f13024",
            },
            fontSize: {
                "2xs": ["10px", "1.5"],
                xs: ["12px", "1.5"],
                sm: ["14px", "1.5"],
                md: ["16px", "1.5"],
                lg: ["18px", "1.5"],
                xl: ["20px", "1.5"],
                "2xl": ["24px", "1.5"],
                "3xl": ["30px", "1.5"],
                "4xl": ["36px", "1.5"],
                "5xl": ["48px", "1.5"],
                "6xl": ["60px", "1.5"],
                "7xl": ["72px", "1.5"],
                "8xl": ["96px", "1.5"],
                "9xl": ["128px", "1.5"],
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },
        },
    },
    plugins: [],
};
export default config;
