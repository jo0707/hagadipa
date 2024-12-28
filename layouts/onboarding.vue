<template>
    <div class="h-screen flex flex-col">
        <header>
            <nav class="flex justify-between p-6 py-4">
                <NuxtImg src="/img/logo.png" alt="Hagadipa" class="w-24 object-contain" />
                <UDropdown :items="items" class="rounded-full border p-2" />
            </nav>
        </header>
        <main class="px-6 py-4 flex-grow">
            <slot></slot>
        </main>
    </div>
</template>

<script setup lang="ts">
const items = [
    [{
        label: 'ID',
        avatar: {
            src: 'https://avatars.githubusercontent.com/u/739984?v=4'
        }
    }, {
        label: 'EN',
        avatar: {
            src: 'https://avatars.githubusercontent.com/u/739984?v=4'
        }
    },]
]
</script>
