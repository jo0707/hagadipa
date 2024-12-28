import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                teal: {
                    "50": "#f2fbfa",
                    "100": "#d2f5f3",
                    "200": "#a5eae6",
                    "300": "#6fd9d6",
                    "400": "#42bebf",
                    "500": "#28a1a4",
                    "600": "#20888d",
                    "700": "#1c6569",
                    "800": "#1b4f54",
                    "900": "#1a4447",
                    "950": "#09272a",
                },
            },
        },
    },
}
