<script setup lang="ts">
import CurriculumVitae from "@/components/CurriculumVitae.vue";
import GeneralInfoForm from "@/components/GeneralInfoForm.vue";
import { onMounted } from "vue";
import { useCVStore } from "@/stores/cv";
import { cvExampleData } from "@/exampleData";

const cv = useCVStore();

onMounted(() => {
  cv.generalInfo = cvExampleData.generalInfo;

  for (let i = 0; i < cvExampleData.educationList.length; i++) {
    cv.educationList.push(cvExampleData.educationList[i]);
  }

  for (let i = 0; i < cvExampleData.jobList.length; i++) {
    cv.jobList.push(cvExampleData.jobList[i]);
  }
});
</script>

<template>
  <div class="flex gap-10 m-4">
    <div>
      <GeneralInfoForm />
    </div>

    <div>
      <CurriculumVitae />
    </div>
  </div>
</template>
