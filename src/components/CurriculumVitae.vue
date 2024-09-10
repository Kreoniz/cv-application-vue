<script setup lang="ts">
import ExperienceSection from "@/components/ExperienceSection.vue";
import EducationSection from "@/components/EducationSection.vue";
import { useCVStore } from "@/stores/cv";

const cv = useCVStore();
</script>

<template>
  <div class="h-full w-full overflow-hidden shadow-xl">
    <div
      class="flex flex-wrap items-center justify-center gap-4 bg-sky-800 p-8 text-white"
    >
      <div class="text-4xl font-semibold">{{ cv.generalInfo.name }}</div>
      <div>
        <div class="text-lg">{{ cv.generalInfo.email }}</div>
        <div class="text-lg">{{ cv.generalInfo.phone }}</div>
      </div>
    </div>

    <div class="border-b-2 p-3">
      <ExperienceSection />
    </div>

    <div class="p-3">
      <EducationSection />
    </div>
  </div>
</template>
