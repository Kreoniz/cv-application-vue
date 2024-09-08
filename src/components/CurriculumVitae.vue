<script setup lang="ts">
import ExperienceSection from "@/components/ExperienceSection.vue";
import EducationSection from "@/components/EducationSection.vue";
</script>

<template>
  <div class="shadow-xl w-full h-full">
    <div class="p-2 bg-sky-800 text-white flex items-center gap-4">
      <div class="text-3xl font-semibold">Name Surname</div>
      <div>
        <div class="text-lg">email@email.mail</div>
        <div class="text-lg">123-456-789</div>
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
