// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: [
        "@nuxt/ui",
        "@nuxt/fonts",
        "@vueuse/nuxt",
        "@pinia/nuxt",
        "@nuxtjs/seo",
        "@nuxtjs/supabase",
        "@hypernym/nuxt-anime",
        "@nuxt/image",
    ],
    site: {
        url: "https://hagadipa.jooo.site/",
        name: "Hagadipa",
        description: "Nikmati petualangan seru di Lampung bersama teman perjalanan terbaik Anda.",
        defaultLocale: "id",
    },
    i18n: {
        locales: [
            { code: "id", language: "id-ID" },
            { code: "en", language: "en-US" },
        ],
        defaultLocale: "id",
    },
    anime: {
        composables: true,
    },
    colorMode: {
        preference: "light",
    },
    vite: {
        resolve: {
            alias: {
                ".prisma/client/index-browser": "./node_modules/.prisma/client/index-browser.js",
            },
        },
    },
    supabase: {
        redirect: false,
        redirectOptions: {
            login: "/login",
            callback: "/confirm",
            include: undefined,
            exclude: [],
            cookieRedirect: false,
        },
    },
    image: {
        formats: ["webp"],
    },
})
