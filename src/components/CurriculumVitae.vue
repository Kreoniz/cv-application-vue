<script setup lang="ts">
import ExperienceSection from "@/components/ExperienceSection.vue";
import EducationSection from "@/components/EducationSection.vue";
import { useCVStore } from "@/stores/cv";

const cv = useCVStore();
</script>

<template>
  <div class="shadow-xl w-full h-full">
    <div class="p-2 bg-sky-800 text-white flex items-center gap-4">
      <div class="text-3xl font-semibold">{{ cv.generalInfo.name }}</div>
      <div>
        <div class="text-lg">{{ cv.generalInfo.email }}</div>
        <div class="text-lg">{{ cv.generalInfo.phone }}</div>
      </div>
    </div>

    <div class="border-b p-2">
      <ExperienceSection />
    </div>

    <div class="p-2">
      <EducationSection />
    </div>
  </div>
</template>
