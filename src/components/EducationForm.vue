<template>
  <div class="rounded-md border-2 p-4">
    <h2 class="text-xl font-bold">Education Information</h2>
    <div class="my-2">
      <button
        :disabled="
          Boolean(isCreating && selectedItem && selectedItem.id === item.id)
        "
        v-for="item in educationList"
        :key="item.id"
        @click="() => handleSelectItem(item)"
        class="my-2 block w-full border-2 px-2 py-1 text-left text-lg font-bold transition-colors hover:bg-gray-200"
        :class="{
          'bg-gray-200':
            isSelected && selectedItem && selectedItem.id === item.id,
        }"
      >
        {{ item.schoolName }}
      </button>

      <button
        @click="handleCreateItem"
        class="my-2 block w-full border-2 px-2 py-1 text-center text-lg font-bold transition-colors hover:bg-gray-200"
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
          class="block w-full border-2 p-1"
          type="text"
          placeholder="School name"
          v-model="selectedItem!.schoolName"
        />
      </div>

      <div>
        <label for="title">Title:</label>
        <input
          id="title"
          class="block w-full border-2 p-1"
          type="text"
          placeholder="Title"
          v-model="selectedItem!.title"
        />
      </div>

      <div>
        <label for="educationStartDate">Start date:</label>
        <input
          id="educationStartDate"
          class="block w-full border-2 p-1"
          type="text"
          placeholder="Start date"
          v-model="selectedItem!.startDate"
        />
      </div>

      <div>
        <label for="educationEndDate">End date:</label>
        <input
          id="educationEndDate"
          class="block w-full border-2 p-1"
          type="text"
          placeholder="End date"
          v-model="selectedItem!.endDate"
        />
      </div>

      <div class="flex justify-between">
        <button
          @click="handleCancel"
          type="button"
          class="border-2 p-2 transition-colors hover:bg-gray-200"
        >
          Cancel
        </button>
        <button
          v-if="!isCreating"
          @click="() => handleRemove(selectedItem!.id)"
          type="button"
          class="border-2 p-2 transition-colors hover:bg-gray-200"
        >
          Remove
        </button>
        <button
          type="submit"
          class="border-2 p-2 transition-colors hover:bg-gray-200"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { Ref } from "vue";
import { TEducation } from "@/types";
import { cvStore } from "@/stores/cv";
import { v4 as uuidv4 } from "uuid";
import { storeToRefs } from "pinia";

const cv = cvStore();
const { educationList } = storeToRefs(cv);

const isCreating = ref(false);
const selectedItem: Ref<TEducation | null> = ref(null);
const selectedItemSave: Ref<TEducation | null> = ref(null);

const isSelected = computed(() => {
  return selectedItem.value && Object.keys(selectedItem.value).length > 0;
});

const handleSubmit = () => {
  selectedItem.value = null;
  selectedItemSave.value = null;
  isCreating.value = false;
  handleCancel();
};

const handleRemove = (id: string) => {
  const index = educationList.value.findIndex((item) => item.id === id);
  educationList.value.splice(index, 1);
  selectedItem.value = null;
  selectedItemSave.value = null;
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
    const index = educationList.value.findIndex((item) => item.id === id);
    educationList.value.splice(index, 1, selectedItemSave.value as TEducation);
  }

  selectedItem.value = null;
  selectedItemSave.value = null;
};

const handleSelectItem = (item: TEducation) => {
  const isSameItem = selectedItem.value && item.id === selectedItem.value.id;

  if (isSameItem) {
    const id = item.id;
    const index = educationList.value.findIndex((item) => item.id === id);
    educationList.value.splice(index, 1, selectedItemSave.value as TEducation);

    selectedItem.value = null;
    selectedItemSave.value = null;
  }

  handleCancel();

  if (!isSameItem) {
    selectedItem.value = item;
    selectedItemSave.value = { ...item };
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

    educationList.value.push(selectedItem.value);
  }
};
</script>
