<template>
  <div class="m-4 flex justify-center gap-10">
    <div class="w-96 shrink-0">
      <div class="mb-4 flex justify-between">
        <button
          @click="clearCV"
          class="border-2 p-2 transition-colors hover:bg-gray-200"
        >
          Clear CV
        </button>
        <button
          @click="loadExampleData"
          class="border-2 p-2 transition-colors hover:bg-gray-200"
        >
          Load example data
        </button>
      </div>

      <div class="flex flex-col gap-4">
        <GeneralInfoForm />
        <ExperienceForm />
        <EducationForm />
      </div>
    </div>

    <div class="h-[1200px] w-[800px]">
      <CurriculumVitae />
    </div>
  </div>
</template>

<script setup lang="ts">
import CurriculumVitae from "@/components/CurriculumVitae.vue";
import GeneralInfoForm from "@/components/GeneralInfoForm.vue";
import EducationForm from "@/components/EducationForm.vue";
import ExperienceForm from "@/components/ExperienceForm.vue";

import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { cvStore } from "@/stores/cv";
import { cvExampleData } from "@/mocks";

const cv = cvStore();
const { generalInfo, educationList, jobList } = storeToRefs(cv);

const clearCV = () => {
  generalInfo.value = { name: "", email: "", phone: "" };
  educationList.value = [];
  jobList.value = [];
};

const loadExampleData = () => {
  clearCV();
  generalInfo.value = cvExampleData.generalInfo;

  for (let i = 0; i < cvExampleData.educationList.length; i++) {
    educationList.value.push(cvExampleData.educationList[i]);
  }

  for (let i = 0; i < cvExampleData.jobList.length; i++) {
    jobList.value.push(cvExampleData.jobList[i]);
  }
};

onMounted(() => {
  loadExampleData();
});
</script>
