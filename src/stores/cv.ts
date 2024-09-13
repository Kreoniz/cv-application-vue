import { ref } from "vue";
import type { Ref } from "vue";
import { defineStore } from "pinia";
import { TEducation, TJob, TGeneralInfo } from "@/types";

export const cvStore = defineStore("cv", () => {
  const jobList: Ref<TJob[]> = ref([]);
  const educationList: Ref<TEducation[]> = ref([]);
  const generalInfo: Ref<TGeneralInfo> = ref({
    name: "",
    email: "",
    phone: "",
  });

  return { jobList, educationList, generalInfo };
});
