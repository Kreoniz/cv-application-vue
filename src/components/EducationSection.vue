<template>
  <div>
    <div class="border-b-2 border-black text-xl font-semibold">Education</div>
    <EducationCard
      v-for="item in cv.educationList"
      :key="item.id"
      :schoolName="item.schoolName"
      :title="item.title"
      :startDate="item.startDate"
      :endDate="item.endDate"
    />
  </div>
</template>

<script setup lang="ts">
import EducationCard from "@/components/EducationCard.vue";
import { useCVStore } from "@/stores/cv";

const cv = useCVStore();
</script>
