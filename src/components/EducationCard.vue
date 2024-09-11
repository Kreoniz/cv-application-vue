<template>
  <div class="my-4">
    <div>
      <div class="text-xl font-semibold leading-5">{{ schoolName }}</div>
      <div class="text-sm text-black/60">{{ startDate }} - {{ endDate }}</div>
    </div>
    <div class="text-lg">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  schoolName: string;
  title: string;
  startDate: string;
  endDate: string;
}>();
</script>
