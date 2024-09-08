<script setup lang="ts">
defineProps<{
  companyName: string;
  position: string;
  description: string;
  start_date: string;
  end_date: string;
}>();
</script>

<template>
  <div class="my-4">
    <div>
      <div class="leading-5 font-semibold text-xl">{{ companyName }}</div>
      <div class="text-sm text-black/60">{{ start_date }} - {{ end_date }}</div>
    </div>
    <div class="text-lg">{{ position }}</div>
    <div class="leading-tight">{{ description }}</div>
  </div>
</template>
