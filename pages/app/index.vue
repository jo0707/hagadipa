<template>
    <div class="min-h-screen bg-[#f6f6f6]">
        <header
            class="flex flex-col gap-6 bg-[url('/img/app_search_bg.png')] bg-black/20 bg-blend-darken bg-cover bg-center bg-no-repeat rounded-b-xl p-4">
            <div class="flex justify-between place-content-center text-white font-medium">
                <div class="flex justify-center place-content-center gap-2">
                    <UIcon name="mdi:map-marker-outline" size="24" class="text-white my-auto" />
                    <div class="flex flex-col justify-center place-content-center">
                        <h5 class="text-sm">Lokasi Kamu</h5>
                        <USelect v-model="selectedLocation" :options="currentLocations" variant="none"
                            :padded="false" />
                    </div>
                </div>
                <div>
                    <UButton variant="soft" icon="mdi:bell-ring-outline" rounded class="bg-white/40 text-white" />
                </div>
            </div>

            <UInput placeholder="Mau kemana yay?" class="w-full" icon="mdi:magnify" :ui="{ rounded: 'rounded-full' }" />
        </header>

        <div class="flex gap-3 w-full overflow-auto py-4 px-6 no-scrollbar">
            <button v-for="filter in destinationFilters" :key="filter" @click="selectedFilter = filter"
                :class="selectedFilter === filter ? 'bg-primary/20 border border-primary-600 text-primary-600 font-medium' : 'bg-white border border-gray-400 text-slate-900'"
                class="w-full text-sm py-2 px-2 rounded-xl whitespace-nowrap">
                {{ filter }}
            </button>
        </div>

        <div class="px-6 mt-2">
            <h2 class="font-semibold text-xl">Jelajahi Lampung</h2>
            <div class="grid grid-cols-4 max-w-md mx-auto mt-4 gap-4">
                <div v-for="explore in exploreButtons" class="flex flex-col items-center group">
                    <div :style="`background-color:${explore.color}`"
                        class="w-16 h-16 flex items-center justify-center rounded-full shadow-md group-hover:shadow-lg transition">
                        <UIcon :name="explore.icon" size="24" class="text-white my-auto" />
                    </div>
                    <p class="text-[13px] text-center text-gray-700 group-hover:text-black mt-2">{{ explore.title }}</p>
                </div>
            </div>
        </div>

        <div class="px-6 mt-6">
            <UCarousel v-slot="{ item }" :items="promos" :ui="{ item: 'basis-full' }"
                class="rounded-lg overflow-hidden">
                <img :src="item.image" draggable="false" class=" shadow w-full">
            </UCarousel>
        </div>

        <div class="pl-6 mt-6">
            <div class="flex justify-between items-center mr-6">
                <h2 class="font-semibold text-xl">Terdekat dari lokasi kamu</h2>
                <UButton icon="mdi:arrow-right" class="text-black" variant="ghost" />
            </div>

            <UCarousel :items="nearestDestination" v-slot="{ item }" :ui="{ item: 'basis-3/4 lg:basis-1/2' }">
                <div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden relative mr-2">
                    <img :src="item.image" :alt="item.name" class="w-full h-72 object-cover">
                    <div class="w-full absolute bottom-0">
                        <div class="m-2 p-4  bg-white rounded-xl">
                            <h3 class="text-lg font-bold text-gray-800">{{ item.name }}</h3>
                            <div class="text-sm text-gray-600 flex items-center">
                                <svg class="w-4 h-4 text-green-500 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 12m-2.828 0L6.343 7.343A8 8 0 0112 3v0a8 8 0 015.657 13.657z" />
                                </svg>
                                {{ item.location }}
                            </div>
                            <div class="flex items-center justify-between mt-2">
                                <div class="text-sm text-gray-500">{{ item.duration }} min · {{ item.distance }} km
                                </div>
                                <div class="flex items-center text-yellow-500">
                                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.42 7.499a1 1 0 00.95.691h7.875c.969 0 1.372 1.24.588 1.81l-6.363 4.556a1 1 0 00-.364 1.118l2.42 7.499c.3.921-.755 1.688-1.54 1.118L12 18.347l-6.363 4.556c-.784.57-1.838-.197-1.539-1.118l2.42-7.499a1 1 0 00-.364-1.118L.318 11.927c-.784-.57-.381-1.81.588-1.81h7.875a1 1 0 00.95-.691l2.42-7.499z" />
                                    </svg>
                                    <span class="ml-1 text-gray-800 text-sm font-bold">4.9</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UCarousel>
        </div>

        <div class="pl-6 mt-6">
            <div class="flex justify-between items-center mr-6">
                <h2 class="font-semibold text-xl">Jelajah kabupaten di Lampung</h2>
                <UButton icon="mdi:arrow-right" class="text-black" variant="ghost" />
            </div>

            <UCarousel class="mt-2" :items="exploreDistrict" v-slot="{ item }" :ui="{ item: 'basis-3/4' }">
                <div class="max-w-sm mx-auto rounded-xl shadow-md overflow-hidden relative mr-2">
                    <img :src="item.image" :alt="item.name" class="w-full h-64 object-cover">
                    <div class="w-full absolute bottom-0 text-white p-4 bg-gradient-to-t from-black/50 to-transparent">
                        <h4 class="font-semibold">Jelajah</h4>
                        <div class="flex gap-2">
                            <h3 class="font-bold">{{ item.name }}</h3>
                            <UIcon name="mdi:chevron-right" size="24" class="text-white" />
                        </div>
                    </div>
                </div>
            </UCarousel>
        </div>

        <div class="pl-6 mt-6">
            <div class="flex justify-between items-center mr-6">
                <h2 class="font-semibold text-xl">Rehat Sejenak</h2>
                <UButton icon="mdi:arrow-right" class="text-black" variant="ghost" />
            </div>

            <UCarousel class="mt-2" :items="exploreDistrict" v-slot="{ item }" :ui="{ item: 'basis-3/4' }">
                <div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden relative mr-2">
                    <img :src="item.image" :alt="item.name" class="w-full h-72 object-cover">
                    <div class="w-full absolute bottom-0">
                        <div class="m-2 p-4  bg-white rounded-xl">
                            <h3 class="text-lg font-bold text-gray-800">{{ item.name }}</h3>
                            <div class="text-sm text-gray-600 flex items-center">
                                <svg class="w-4 h-4 text-green-500 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 12m-2.828 0L6.343 7.343A8 8 0 0112 3v0a8 8 0 015.657 13.657z" />
                                </svg>
                                {{ item.location }}
                            </div>
                            <div class="flex items-center justify-between mt-2">
                                <div class="text-sm text-gray-500">{{ item.duration }} min · {{ item.distance }} km
                                </div>
                                <div class="flex items-center text-yellow-500">
                                    <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.42 7.499a1 1 0 00.95.691h7.875c.969 0 1.372 1.24.588 1.81l-6.363 4.556a1 1 0 00-.364 1.118l2.42 7.499c.3.921-.755 1.688-1.54 1.118L12 18.347l-6.363 4.556c-.784.57-1.838-.197-1.539-1.118l2.42-7.499a1 1 0 00-.364-1.118L.318 11.927c-.784-.57-.381-1.81.588-1.81h7.875a1 1 0 00.95-.691l2.42-7.499z" />
                                    </svg>
                                    <span class="ml-1 text-gray-800 text-sm font-bold">4.9</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UCarousel>
        </div>

        <div class="mt-16">e</div>
    </div>
</template>

<script setup lang="ts">
import type { Destination } from '~/types/Destination'
import type { District } from '~/types/District'

definePageMeta({
    title: 'Home',
    description: 'Mau kemana yay?',
})

const currentLocations = ['Bandar Lampung', 'Lampung Selatan', 'Lampung Tengah', 'Lampung Utara', 'Lampung Barat', 'Lampung Timur', 'Metro']
const selectedLocation = ref('Bandar Lampung')

const destinationFilters = ['Terdekat', 'Hidden Gem 💎', 'Belajar Budaya 🏡', 'Lagi Ramai 🤩']
const selectedFilter = ref('Terdekat')

const exploreButtons = [
    {
        id: 1,
        title: 'Penginapan',
        icon: 'material-symbols:bed-outline',
        color: '#20888d',
    },
    {
        id: 2,
        title: 'Tempat Makan',
        icon: 'material-symbols:restaurant-rounded',
        color: '#ffac5c',
    },
    {
        id: 3,
        title: 'Hiburan',
        icon: 'material-symbols:attractions-outline',
        color: '#6699cc',
    },
    {
        id: 4,
        title: 'Wisata Alam',
        icon: 'material-symbols:forest-outline-rounded',
        color: '#66bb6a',
    },
    {
        id: 5,
        title: 'Belanja',
        icon: 'material-symbols:local-mall-outline-rounded',
        color: '#e06666',
    },
    {
        id: 6,
        title: 'Oleh-Oleh',
        icon: 'material-symbols:redeem-rounded',
        color: '#8c66d9',
    },
    {
        id: 7,
        title: 'Budaya',
        icon: 'material-symbols:wall-art-outline-rounded',
        color: '#20888d',
    },
    {
        id: 8,
        title: 'Transportasi',
        icon: 'material-symbols:local-taxi-outline',
        color: '#ffac5c',
    },
]

const promos = [
    {
        id: 1,
        title: 'Promo 1',
        image: '/img/promo1.png',
    },
    {
        id: 2,
        title: 'Promo 2',
        image: '/img/promo1.png',
    },
    {
        id: 3,
        title: 'Promo 3',
        image: '/img/promo1.png',
    }
]

const nearestDestination: Destination[] = [
    {
        id: 1,
        name: "Pantai Mutun",
        image: "/img/pantai.jpg",
        location: "Pesawaran",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 4.9,
        price: 20000,
        duration: 20,
        distance: 3.7
    },
    {
        id: 2,
        name: "Krakatau Park",
        image: "img/krakataupark.png",
        location: "Bakauheni",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rating: 4.8,
        price: 35000,
        duration: 60,
        distance: 8
    },
    {
        id: 3,
        name: "Pahawang Island",
        image: "/img/pantai.jpg",
        location: "Pesawaran",
        description: "Explore the pristine waters and vibrant marine life of Pahawang Island, a snorkeling paradise in Lampung.",
        rating: 4.9,
        price: 150,
        duration: 3,
        distance: 25
    },
    {
        id: 4,
        name: "Way Kambas National Park",
        image: "/img/pantai.jpg",
        location: "Lampung Timur",
        description: "Visit the famous national park to experience the conservation efforts for Sumatran elephants and enjoy the lush scenery.",
        rating: 4.8,
        price: 100,
        duration: 5,
        distance: 60
    },
    {
        id: 5,
        name: "Kiluan Bay",
        image: "/img/pantai.jpg",
        location: "Tanggamus",
        description: "Witness the playful dolphins and enjoy the serene beaches of Kiluan Bay, a gem of Lampung.",
        rating: 4.7,
        price: 130,
        duration: 4,
        distance: 40
    },
]

const exploreDistrict: District[] = [
    {
        id: 1,
        name: "Lampung Timur",
        image: "/img/pantai.jpg", // Replace with a real URL or use undefined
    },
    {
        id: 2,
        name: "Metro",
        image: "/img/pantai.jpg", // Replace with a real URL or use undefined
    },
    {
        id: 3,
        name: "Lampung Selatan",
        image: '/img/pantai.jpg', // No image provided
    },
]
</script>