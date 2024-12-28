<template>
  <div class="h-full flex flex-col radial-bg">
    <OnboardingCarousel class="my-auto py-16" />
    <div class="flex flex-col gap-2">
      <UButton to="/login" size="lg" label="Masuk" class="bg-gradient-to-r from-teal-500 to-teal-600" block />
      <UButton to="/register" size="lg" label="Daftar Akun" class="" variant="outline" block />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Onboarding',
  description: 'Onboarding page',
  layout: 'onboarding'
})
</script>
