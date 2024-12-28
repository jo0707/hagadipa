<template>
  <div class="flex flex-col gap-2 w-full relative">
    <div class="flex gap-2 overflow-hidden justify-center">
      <NuxtImg preload loading="eager" src="/img/museum_lampung.png"
        class="h-28 w-48 object-contain bg-gray-200 rounded-xl" draggable="false" />
      <NuxtImg preload loading="eager" src="/img/pantai.png"
        class="h-28 w-48 min-h-28 object-cover bg-gray-200 rounded-xl" draggable="false" />
      <NuxtImg preload loading="eager" src="/img/pantai2.png"
        class="h-28 w-48 min-h-28 object-cover bg-gray-200 rounded-xl" draggable="false" />
    </div>
    <div class="flex gap-2 overflow-hidden justify-center">
      <NuxtImg preload loading="eager" src="/img/durian.png"
        class="h-28 w-48 min-h-28 object-cover bg-gray-200 rounded-xl" draggable="false" />
      <NuxtImg preload loading="eager" src="/img/surfing.png"
        class="h-28 w-48 min-h-28 object-cover bg-gray-200 rounded-xl" draggable="false" />
      <NuxtImg preload loading="eager" src="/img/gunung1.png"
        class="h-28 w-48 min-h-28 object-cover bg-gray-200 rounded-xl" draggable="false" />
    </div>
    <div ref="locationContainer" class="absolute top-0 left-0 w-full h-full">
      <div v-for="location in locations" :key="location.name"
        class="absolute scale-0 rounded-lg shadow-lg shadow-teal-700/60 bg-white p-2"
        :style="{ top: location.y * 100 + '%', left: location.x * 100 + '%' }">
        <h3 class="font-semibold text-xs">{{ location.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const locations = [
  {
    name: "Gunung Rajabasa   ⛰",
    x: 0.32,
    y: 0.15,
  },
  {
    name: "Way Kambas   🏡",
    x: 0.55,
    y: 0.33,
  },
  {
    name: "Pantai Labuhan Ratu   ⛱",
    x: 0.1,
    y: 0.45,
  },
  {
    name: "Krakatau Park   🎢",
    x: 0.6,
    y: 0.6,
  },
  {
    name: "Museum Lampung   🏡",
    x: 0.14,
    y: 0.67,
  },
]

const locationContainer = ref()
const props = defineProps(['isOpen'])

function animate() {
  locations.forEach((location, index) => {
    useAnime({
      targets: locationContainer.value.children[index],
      scale: [0, 1],
      duration: 2000,
      delay: (index * 200) + 1500,
      elasticity: 200,
    })
  })
}

onMounted(() => {
  animate()
})
</script>

<style></style>