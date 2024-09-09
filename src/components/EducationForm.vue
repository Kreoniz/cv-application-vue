<script setup lang="ts">
import { ref, computed } from "vue";
import type { Ref } from "vue";
import { TEducation } from "@/types";
import { useCVStore } from "@/stores/cv";
import { v4 as uuidv4 } from "uuid";

const cv = useCVStore();

const isCreating = ref(false);
const selectedItem: Ref<TEducation | null> = ref(null);
let selectedItemSave: TEducation | null = null;

const isSelected = computed(() => {
  return selectedItem.value && Object.keys(selectedItem.value).length > 0;
});

const handleSubmit = () => {
  selectedItem.value = null;
  selectedItemSave = null;
};

const handleRemove = (id: string) => {
  const index = cv.educationList.findIndex((item) => item.id === id);
  cv.educationList.splice(index, 1);
  selectedItem.value = null;
  selectedItemSave = null;
};

const handleCancel = () => {
  if (!selectedItem.value) {
    return;
  }

  const id = selectedItem.value.id;
  if (isCreating.value) {
    handleRemove(id);
    isCreating.value = false;
  } else {
    const index = cv.educationList.findIndex((item) => item.id === id);
    cv.educationList.splice(index, 1, selectedItemSave as TEducation);
  }

  selectedItem.value = null;
  selectedItemSave = null;
};

const handleSelectItem = (item: TEducation) => {
  const isSameItem = selectedItem.value && item.id === selectedItem.value.id;

  if (isSameItem) {
    const id = item.id;
    const index = cv.educationList.findIndex((item) => item.id === id);
    cv.educationList.splice(index, 1, selectedItemSave as TEducation);

    selectedItem.value = null;
    selectedItemSave = null;
  }

  handleCancel();

  if (!isSameItem) {
    selectedItem.value = item;
    selectedItemSave = { ...item };
  }
};

const handleCreateItem = () => {
  handleCancel();

  isCreating.value = !isCreating.value;
  if (isCreating.value) {
    selectedItem.value = {
      id: uuidv4(),
      schoolName: "",
      title: "",
      startDate: "",
      endDate: "",
    };

    cv.educationList.push(selectedItem.value);
  }
};
</script>

<template>
  <div class="border-2 p-4 rounded-md">
    <h2 class="font-bold text-xl">Education Information</h2>
    <div class="my-2">
      <button
        :disabled="
          Boolean(isCreating && selectedItem && selectedItem.id === item.id)
        "
        v-for="item in cv.educationList"
        :key="item.id"
        @click="() => handleSelectItem(item)"
        class="text-lg border-2 my-2 block font-bold w-full text-left px-2 py-1 hover:bg-gray-200 transition-colors"
        :class="{
          'bg-gray-200':
            isSelected && selectedItem && selectedItem.id === item.id,
        }"
      >
        {{ item.schoolName }}
      </button>

      <button
        @click="handleCreateItem"
        class="text-lg border-2 my-2 block font-bold w-full text-center px-2 py-1 hover:bg-gray-200 transition-colors"
        :class="{
          'bg-gray-200': isCreating,
        }"
      >
        +
      </button>
    </div>

    <form
      v-if="isSelected"
      @submit.prevent="handleSubmit"
      class="flex flex-col gap-2"
    >
      <div>
        <label for="schoolName">School/University name:</label>
        <input
          id="schoolName"
          class="border-2 block p-1 w-full"
          type="text"
          placeholder="School name"
          v-model="selectedItem!.schoolName"
        />
      </div>

      <div>
        <label for="title">Title:</label>
        <input
          id="title"
          class="border-2 block p-1 w-full"
          type="text"
          placeholder="Title"
          v-model="selectedItem!.title"
        />
      </div>

      <div>
        <label for="startDate">Start date:</label>
        <input
          id="startDate"
          class="border-2 block p-1 w-full"
          type="text"
          placeholder="Start date"
          v-model="selectedItem!.startDate"
        />
      </div>

      <div>
        <label for="endDate">End date:</label>
        <input
          id="endDate"
          class="border-2 block p-1 w-full"
          type="text"
          placeholder="End date"
          v-model="selectedItem!.endDate"
        />
      </div>

      <div class="flex justify-between">
        <button
          @click="handleCancel"
          type="button"
          class="border-2 p-2 hover:bg-gray-200 transition-colors"
        >
          Cancel
        </button>
        <button
          v-if="!isCreating"
          @click="() => handleRemove(selectedItem!.id)"
          type="button"
          class="border-2 p-2 hover:bg-gray-200 transition-colors"
        >
          Remove
        </button>
        <button
          type="submit"
          class="border-2 p-2 hover:bg-gray-200 transition-colors"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
