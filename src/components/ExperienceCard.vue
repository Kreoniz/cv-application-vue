<script setup lang="ts">
defineProps<{
  companyName: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;
}>();
</script>

<template>
  <div class="my-4">
    <div>
      <div class="leading-5 font-semibold text-xl">{{ companyName }}</div>
      <div class="text-sm text-black/60">{{ startDate }} - {{ endDate }}</div>
    </div>
    <div class="text-lg">{{ position }}</div>
    <div class="leading-tight">{{ description }}</div>
  </div>
</template>
