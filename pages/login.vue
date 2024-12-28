<template>
  <div>
    <h1 class="font-bold text-3xl">Selamat Datang!</h1>
    <h2 class="font-semibold text-xl">Masuk untuk melanjutkan</h2>

    <UForm :schema="schema" :state="state" class="flex flex-col gap-4 mt-8" @submit="onSubmit" eagerValidation="true">
      <UFormGroup label="Email" name="email">
        <UInput :ui="{}" v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput :ui="{}" v-model="state.password" type="password" />
      </UFormGroup>

      <div class="flex flex-col gap-2 mt-8">
        <UButton type="submit" label="Masuk" block />
        <UButton label="Belum punya akun? Daftar" block variant="outline" to="register" />
      </div>

    </UForm>

    <UDivider orientation="horizontal" label="Atau masuk dengan" class="text-xs mt-4" />

    <div class="flex gap-4 justify-center mt-4">
      <UButton :padded="false" variant="outline" class="w-12 h-12 justify-center" icon="logos:google-icon" />
      <UButton :padded="false" variant="outline" class="w-12 h-12 justify-center" icon="logos:apple" />
      <UButton :padded="false" variant="outline" class="w-12 h-12 justify-center" icon="logos:facebook" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Masuk',
  description: 'Masuk ke akun Anda',
  layout: 'onboarding'
})
import { z } from 'zod'


const state = reactive({
  email: "",
  password: "",
})

const schema = z.object({
  email: z.string().email('Email tidak valid'),
  password: z.string().min(8, 'Minimal 8 karakter'),
})

type Schema = z.output<typeof schema>

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
  navigateTo('/app')
}
</script>