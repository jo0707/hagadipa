<template>
    <div>
        <header
            class="flex flex-col gap-4 bg-[url('/img/app_search_bg.png')] bg-black/20 bg-blend-darken h-40 bg-cover bg-center bg-no-repeat rounded-b-xl p-4">
            <div class="flex justify-between place-content-center text-white font-medium">
                <div class="flex justify-center gap-4">
                    <UIcon name="mdi:map-marker-outline" class="text-white" />
                    <div class="flex flex-col justify-center">
                        <h5>Lokasi Kamu</h5>
                        <USelectMenu  />
                    </div>
                </div>
                <div>
                    <UButton variant="soft" icon="mdi:bell-ring-outline" rounded class="bg-white/40 text-white" />
                </div>
            </div>

            <UInput placeholder="Mau kemana yay?" class="w-full" icon="mdi:magnify" :ui="{ rounded: 'rounded-full' }" />
        </header>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    title: 'Home',
    description: 'Mau kemana yay?',
})

const items = [
    [{
        label: 'Profile',
        avatar: {
            src: 'https://avatars.githubusercontent.com/u/739984?v=4'
        }
    }], [{
        label: 'Edit',
        icon: 'i-heroicons-pencil-square-20-solid',
        shortcuts: ['E'],
        click: () => {
            console.log('Edit')
        }
    }, {
        label: 'Duplicate',
        icon: 'i-heroicons-document-duplicate-20-solid',
        shortcuts: ['D'],
        disabled: true
    }], [{
        label: 'Archive',
        icon: 'i-heroicons-archive-box-20-solid'
    }, {
        label: 'Move',
        icon: 'i-heroicons-arrow-right-circle-20-solid'
    }], [{
        label: 'Delete',
        icon: 'i-heroicons-trash-20-solid',
        shortcuts: ['⌘', 'D']
    }]
]

</script>