import { reactive } from "vue";
import { defineStore } from "pinia";
import { TEducation, TJob, TGeneralInfo } from "@/types";

export const cvStore = defineStore("cv", () => {
  const jobList: TJob[] = reactive([]);
  const educationList: TEducation[] = reactive([]);
  const generalInfo: TGeneralInfo = reactive({
    name: "",
    email: "",
    phone: "",
  });

  return { jobList, educationList, generalInfo };
});
