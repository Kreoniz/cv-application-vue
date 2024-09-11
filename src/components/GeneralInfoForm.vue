<template>
  <div class="rounded-md border-2 p-4">
    <h2 class="mb-2 text-xl font-bold">General Information</h2>
    <form @submit.prevent action="#" class="flex flex-col gap-2">
      <div>
        <label for="name" class="text-lg">Full name:</label>
        <input
          id="name"
          class="block w-full border-2 p-1"
          type="text"
          placeholder="Arthur Dent"
          v-model="cv.generalInfo.name"
        />
      </div>

      <div>
        <label for="email" class="text-lg">Email:</label>
        <input
          id="email"
          class="block w-full border-2 p-1"
          type="email"
          placeholder="example@domain.com"
          v-model="cv.generalInfo.email"
        />
      </div>

      <div>
        <label for="phone" class="text-lg">Phone number:</label>
        <input
          id="phone"
          class="block w-full border-2 p-1"
          type="tel"
          placeholder="(123) 456-7890"
          v-model="cv.generalInfo.phone"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useCVStore } from "@/stores/cv";

const cv = useCVStore();
</script>
