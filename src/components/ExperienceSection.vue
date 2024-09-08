<script setup lang="ts">
import ExperienceCard from "@/components/ExperienceCard.vue";

const jobList = [
  {
    id: 1,
    companyName: "CodeCanvas",
    position: "Software Architect",
    description:
      "Led the design and implementation of scalable and efficient software architectures for remote development environments, ensuring alignment with business requirements and technical standards.",
    start_date: "10.09.2022",
    end_date: "Present",
  },
  {
    id: 2,
    companyName: "Web Weavers",
    position: "Backend Developer",
    description:
      "Designed and implemented robust server-side applications using Node.js and PHP frameworks, ensuring high performance and responsiveness to requests from the front end.",
    start_date: "03.05.2021",
    end_date: "10.09.2022",
  },
  {
    id: 3,
    companyName: "Awesome Company inc.",
    position: "Fullstack Developer",
    description:
      "Designed and developed end-to-end web applications, implementing both front-end and back-end components using JavaScript frameworks (React, Angular) and Node.js.",
    start_date: "02.01.2021",
    end_date: "03.05.2021",
  },
  {
    id: 4,
    companyName: "Awesome Company inc.",
    position: "Frontend Developer",
    description:
      "Designed and implemented dynamic and responsive user interfaces using modern JavaScript frameworks such as React and Vue.js, enhancing user engagement and experience.",
    start_date: "01.01.2021",
    end_date: "02.01.2021",
  },
];
</script>

<template>
  <div>
    <div class="text-xl font-semibold border-b-2 border-black">
      Work experience section
    </div>
    <ExperienceCard
      v-for="job in jobList"
      :key="job.id"
      :companyName="job.companyName"
      :position="job.position"
      :start_date="job.start_date"
      :end_date="job.end_date"
      :description="job.description"
    />
  </div>
</template>
