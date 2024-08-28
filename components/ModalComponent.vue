<template>
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white dark:bg-dark-background rounded-lg p-8 w-full max-w-lg relative">
        <button @click="closeModal" class="absolute top-4 right-4 text-gray-600 dark:text-gray-400">X</button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const show = ref(false);
  
  const closeModal = () => {
    show.value = false;
  };
  
  const openModal = () => {
    show.value = true;
  };
  
  defineExpose({ show, openModal, closeModal });
  </script>
  