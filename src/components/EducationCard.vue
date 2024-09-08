<script setup lang="ts">
defineProps<{
  schoolName: string;
  title: string;
  start_date: string;
  end_date: string;
}>();
</script>

<template>
  <div class="my-4">
    <div>
      <div class="leading-5 font-semibold text-xl">{{ schoolName }}</div>
      <div class="text-sm text-black/60">{{ start_date }} - {{ end_date }}</div>
    </div>
    <div class="text-lg">{{ title }}</div>
  </div>
</template>
