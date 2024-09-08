<script setup lang="ts">
import { useCVStore } from "@/stores/cv";

const cv = useCVStore();
</script>

<template>
  <div class="border-2 p-4 rounded-md">
    <h2 class="text-xl font-bold mb-2">General Information</h2>
    <form @submit.prevent action="#" class="flex flex-col gap-2">
      <div>
        <label for="name" class="text-lg">Full name:</label>
        <input
          id="name"
          class="border-2 block p-1"
          type="text"
          placeholder="Arthur Dent"
          v-model="cv.generalInfo.name"
        />
      </div>

      <div>
        <label for="email" class="text-lg">Email:</label>
        <input
          id="email"
          class="border-2 block p-1"
          type="email"
          placeholder="example@domain.com"
          v-model="cv.generalInfo.email"
        />
      </div>

      <div>
        <label for="phone" class="text-lg">Phone number:</label>
        <input
          id="phone"
          class="border-2 block p-1"
          type="tel"
          placeholder="(123) 456-7890"
          v-model="cv.generalInfo.phone"
        />
      </div>
    </form>
  </div>
</template>
