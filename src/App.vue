<script setup lang="ts">
import CurriculumVitae from "@/components/CurriculumVitae.vue";
import GeneralInfoForm from "@/components/GeneralInfoForm.vue";
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
