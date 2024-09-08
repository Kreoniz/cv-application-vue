<script setup lang="ts">
import CurriculumVitae from "@/components/CurriculumVitae.vue";
import GeneralInfoForm from "@/components/GeneralInfoForm.vue";
import { onMounted } from "vue";
import { useCVStore } from "@/stores/cv";
import { cvExampleData } from "@/exampleData";

const cv = useCVStore();

onMounted(() => {
  cv.$patch({
    generalInfo: cvExampleData.generalInfo,
    educationList: cvExampleData.educationList,
    jobList: cvExampleData.jobList,
  });
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
