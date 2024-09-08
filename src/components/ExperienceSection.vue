<script setup lang="ts">
import ExperienceCard from "@/components/ExperienceCard.vue";
import { useCVStore } from "@/stores/cv";

const cv = useCVStore();
</script>

<template>
  <div>
    <div class="text-xl font-semibold border-b-2 border-black">
      Work experience section
    </div>
    <ExperienceCard
      v-for="job in cv.jobList"
      :key="job.id"
      :companyName="job.companyName"
      :position="job.position"
      :startDate="job.startDate"
      :endDate="job.endDate"
      :description="job.description"
    />
  </div>
</template>
