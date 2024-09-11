<template>
  <div>
    <div class="border-b-2 border-black text-xl font-semibold">
      Work experience
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

<script setup lang="ts">
import ExperienceCard from "@/components/ExperienceCard.vue";
import { cvStore } from "@/stores/cv";

const cv = cvStore();
</script>
