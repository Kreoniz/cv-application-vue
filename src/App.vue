<script setup lang="ts">
import CurriculumVitae from "@/components/CurriculumVitae.vue";
import GeneralInfoForm from "@/components/GeneralInfoForm.vue";
import EducationForm from "@/components/EducationForm.vue";
import ExperienceForm from "@/components/ExperienceForm.vue";

import { onMounted } from "vue";
import { useCVStore } from "@/stores/cv";
import { cvExampleData } from "@/exampleData";

const cv = useCVStore();

const clearCV = () => {
  cv.generalInfo = { name: "", email: "", phone: "" };
  cv.educationList = [];
  cv.jobList = [];
};

const loadExampleData = () => {
  clearCV();
  cv.generalInfo = cvExampleData.generalInfo;

  for (let i = 0; i < cvExampleData.educationList.length; i++) {
    cv.educationList.push(cvExampleData.educationList[i]);
  }

  for (let i = 0; i < cvExampleData.jobList.length; i++) {
    cv.jobList.push(cvExampleData.jobList[i]);
  }
};

onMounted(() => {
  loadExampleData();
});
</script>

<template>
  <div class="flex gap-10 m-4 justify-center">
    <div class="flex-grow max-w-96">
      <div class="mb-4 flex justify-between">
        <button
          @click="clearCV"
          class="p-2 border-2 hover:bg-gray-200 transition-colors"
        >
          Clear CV
        </button>
        <button
          @click="loadExampleData"
          class="p-2 border-2 hover:bg-gray-200 transition-colors"
        >
          Load example data
        </button>
      </div>

      <div class="flex flex-col gap-4">
        <GeneralInfoForm />
        <EducationForm />
        <ExperienceForm />
      </div>
    </div>

    <div class="w-[800px] h-[1128px]">
      <CurriculumVitae />
    </div>
  </div>
</template>
