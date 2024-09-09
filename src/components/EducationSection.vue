<script setup lang="ts">
import EducationCard from "@/components/EducationCard.vue";
import { useCVStore } from "@/stores/cv";

const cv = useCVStore();
</script>

<template>
  <div>
    <div class="text-xl font-semibold border-b-2 border-black">Education</div>
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
