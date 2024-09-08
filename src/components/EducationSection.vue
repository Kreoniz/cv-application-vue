<script setup lang="ts">
import EducationCard from "@/components/EducationCard.vue";

const educationList = [
  {
    id: 1,
    schoolName: "Crestwood University",
    title: "Bachelor of Science in Environmental Studies",
    start_date: "15.08.2016",
    end_date: "20.05.2020",
  },
  {
    id: 2,
    schoolName: "Silver Oak College",
    title: "Master of Arts in Creative Writing",
    start_date: "01.09.2018",
    end_date: "15.06.2020,",
  },
];
</script>

<template>
  <div>
    <div class="text-xl font-semibold border-b-2 border-black">
      Education section
    </div>
    <EducationCard
      v-for="item in educationList"
      :key="item.id"
      :schoolName="item.schoolName"
      :title="item.title"
      :start_date="item.start_date"
      :end_date="item.end_date"
    />
  </div>
</template>
