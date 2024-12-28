<template>
  <div>
    <h1 class="font-bold text-3xl">Selamat Datang!</h1>
    <h2 class="font-semibold text-xl">Daftar Akun Baru</h2>

    <UForm :schema="schema" :state="state" class="flex flex-col gap-4 mt-8" @submit="onSubmit">
      <UFormGroup label="Nama Lengkap" name="name">
        <UInput :ui="{}" v-model="state.name" />
      </UFormGroup>

      <UFormGroup label="Email" name="email">
        <UInput :ui="{}" v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput :ui="{}" v-model="state.password" type="password" />
      </UFormGroup>

      <UFormGroup label="Konfirmasi Password" name="confirmpassword">
        <UInput :ui="{}" v-model="state.confirmPassword" type="password" />
      </UFormGroup>

      <UFormGroup name="terms" class="text-xs">
        <UCheckbox v-model="state.terms" label="Saya sudah membaca ketentuan yang berlaku">
        </UCheckbox>
      </UFormGroup>

      <div class="flex flex-col gap-2 mt-8">
        <UButton type="submit" label="Daftar Akun baru" block />
        <UButton label="Sudah punya akun? Masuk" block variant="outline" to="login" />
      </div>

    </UForm>

    <UDivider orientation="horizontal" label="Atau daftar dengan" class="text-xs mt-4" />

    <div class="flex gap-4 justify-center mt-4">
      <UButton :padded="false" variant="outline" class="w-12 h-12 justify-center"
        icon="logos:google-icon" />
      <UButton :padded="false" variant="outline" class="w-12 h-12 justify-center" icon="logos:apple" />
      <UButton :padded="false" variant="outline" class="w-12 h-12 justify-center" icon="logos:facebook" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Daftar',
  description: 'Daftar akun baru',
  layout: 'onboarding'
})
import { z } from 'zod'


const state = reactive({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  terms: false,
})

const schema = z.object({
  name: z.string().min(3, 'Minimal 3 karakter'),
  email: z.string().email('Email tidak valid'),
  password: z.string().min(8, 'Minimal 8 karakter'),
  confirmPassword: z.string().min(8, 'Minimal 8 karakter')
    .refine(data => data === state.password, {
      message: 'Password tidak sama',
    }
    ),
  terms: z.boolean().refine(data => data, {
    message: 'Anda harus menyetujui ketentuan yang berlaku',
  }),
})

type Schema = z.output<typeof schema>

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
}
</script>