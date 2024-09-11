<template>
  <div class="my-4">
    <div>
      <div class="text-xl font-semibold leading-5">{{ companyName }}</div>
      <div class="text-sm text-black/60">{{ startDate }} - {{ endDate }}</div>
    </div>
    <div class="text-lg">{{ position }}</div>
    <div class="leading-tight">{{ description }}</div>
  </div>
</template>

<script setup lang="ts">
import { IExperienceCardProps } from "@/types";
defineProps<IExperienceCardProps>();
</script>
