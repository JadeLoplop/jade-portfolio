<template>

  <div class="px-3 pt-14 grid grid-cols-3 ">
    <div class="col-span-2 flex flex-col">
      <h1 class="mb-2 text-3xl font-bold text-black dark:text-white md:text-4xl">
        Bryan Jade Loplop
      </h1>
      <h2 class="mb-4 text-gray-700 dark:text-gray-200">
        Software Development Engineer
      </h2>
      <p class="text-gray-600 dark:text-gray-400">
        I am a Full Stack Software Engineer specialize in backend base in South Cotabato, Philippines.
        <router-link to="/about-me" class="hover:underline hover:decoration-orange-500 hover:decoration-4">
          <span class="flex">More
            <ArrowRightCircleIcon class="h-6 w-6 ml-2" aria-hidden="true" /></span>
        </router-link>
      </p>
    </div>
    
  </div>

</template>

<script setup>
  import {
    ArrowRightCircleIcon
  } from "@heroicons/vue/24/outline"
</script>

<style>

</style>