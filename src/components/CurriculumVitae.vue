<script setup lang="ts">
import ExperienceSection from "@/components/ExperienceSection.vue";
import EducationSection from "@/components/EducationSection.vue";
import { useCVStore } from "@/stores/cv";

const cv = useCVStore();
</script>

<template>
  <div class="shadow-xl w-full h-full overflow-hidden">
    <div
      class="p-8 bg-sky-800 text-white flex items-center gap-4 justify-center flex-wrap"
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
