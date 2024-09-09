<script setup lang="ts">
import { ref, computed } from "vue";
import type { Ref } from "vue";
import { TExperience } from "@/types";
import { useCVStore } from "@/stores/cv";
import { v4 as uuidv4 } from "uuid";

const cv = useCVStore();

const isCreating = ref(false);
const selectedItem: Ref<TExperience | null> = ref(null);
let selectedItemSave: TExperience | null = null;

const isSelected = computed(() => {
  return selectedItem.value && Object.keys(selectedItem.value).length > 0;
});

const handleSubmit = () => {
  selectedItem.value = null;
  selectedItemSave = null;
};

const handleRemove = (id: string) => {
  const index = cv.jobList.findIndex((item) => item.id === id);
  cv.jobList.splice(index, 1);
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
  } else {
    const index = cv.jobList.findIndex((item) => item.id === id);
    cv.jobList.splice(index, 1, selectedItemSave as TExperience);
  }

  selectedItem.value = null;
  selectedItemSave = null;
};

const handleSelectItem = (item: TExperience) => {
  isCreating.value = false;
  if (
    isSelected.value &&
    selectedItem.value &&
    selectedItem.value.id === item.id
  ) {
    handleCancel();
  } else {
    handleCancel();
    selectedItem.value = item;
    selectedItemSave = { ...item };
  }
};

const handleCreateItem = () => {
  isCreating.value = !isCreating.value;
  if (!isCreating.value) {
    handleCancel();
  } else {
    selectedItem.value = {
      id: uuidv4(),
      companyName: "",
      title: "",
      startDate: "",
      endDate: "",
    };

    cv.jobList.push(selectedItem.value);
  }
};
</script>

<template>
  <div class="border-2 p-4 rounded-md">
    <h2 class="font-bold text-xl">Education form</h2>
    <div class="my-2">
      <button
        disabled="isCreating && selectedItem && selectedItem.id === item.id"
        v-for="item in cv.jobList"
        :key="item.id"
        @click="() => handleSelectItem(item)"
        class="text-lg border-2 my-2 block font-bold w-full text-left px-2 py-1 hover:bg-gray-200 transition-colors"
        :class="{
          'bg-gray-200':
            isSelected && selectedItem && selectedItem.id === item.id,
        }"
      >
        {{ item.companyName }}
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
        <label for="companyName">Company name:</label>
        <input
          id="companyName"
          class="border-2 block p-1"
          type="text"
          placeholder="School name"
          v-model="selectedItem!.companyName"
        />
      </div>

      <div>
        <label for="position">Position:</label>
        <input
          id="position"
          class="border-2 block p-1"
          type="text"
          placeholder="Position"
          v-model="selectedItem!.position"
        />
      </div>

      <div>
        <label for="startDate">Start date:</label>
        <input
          id="startDate"
          class="border-2 block p-1"
          type="text"
          placeholder="Start date"
          v-model="selectedItem!.startDate"
        />
      </div>

      <div>
        <label for="endDate">End date:</label>
        <input
          id="endDate"
          class="border-2 block p-1"
          type="text"
          placeholder="End date"
          v-model="selectedItem!.endDate"
        />
      </div>

      <div>
        <label for="description">Description:</label>
        <textarea
          id="endDate"
          class="border-2 block p-1"
          type="text"
          placeholder="Description"
          v-model="selectedItem!.description"
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
