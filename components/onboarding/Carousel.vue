<template>
    <div>
        <UCarousel ref="carouselRef" :items="items" :ui="{
            item: 'basis-full mx-8',
            indicators: {
                wrapper: 'relative bottom-0 mt-4',
                inactive: 'bg-gray-200 dark:bg-gray-800'
            }
        }" class="rounded-lg overflow-hidden" indicators>
            <template #default="{ item, index, active }">
                <div class="flex flex-col gap-4 relative">
                    <NuxtImg v-if="index != 1" :src="item.image" class="w-full rounded" draggable="false" />
                    <OnboardingWisata v-else ref="wisata" class="overflow-hidden" :isOpen="active == 1">
                    </OnboardingWisata>
                    <h2 class="font-semibold text-2xl mt-12">{{ item.title }}</h2>
                    <p>{{ item.description }}</p>
                </div>
            </template>
        </UCarousel>
    </div>
</template>

<script setup lang="ts">
const carouselRef = ref()
const wisataRef = ref()

onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return

        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0)
        }

        carouselRef.value.next()
    }, 5000)
})

const items = [
    {
        title: "Teman Perjalanan ke Lampung!",
        description: "Nikmati petualangan seru di Lampung bersama teman perjalanan terbaik Anda.",
        image: "/img/onboarding1.png"
    },
    {
        title: "Temukan Wisata Terdekat di Lampung!",
        description: "Dari pantai-pantai eksotis hingga pesona Gunung Krakatau yang menakjubkan, setiap detiknya akan terasa istimewa.",
        image: "/img/onboarding2.png"
    },
    {
        title: "Belajar Budaya Lampung",
        description: "Temukan warisan tradisi yang telah diwariskan dari generasi ke generasi, mulai dari tari-tarian khas hingga seni kerajinan tangan yang memukau",
        image: "/img/onboarding3.png"
    },
    {
        title: "Buat Rancangan Perjalanan dengan Otomatis",
        description: "Nikmati perjalanan Anda dengan tenang dan nyaman bersama tour guide profesional kami",
        image: "/img/onboarding4.png"
    },
]


</script>
