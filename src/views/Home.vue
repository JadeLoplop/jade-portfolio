<template>

  <div class="px-3 grid grid-cols-3 ">
    <div class="col-span-2 py-14 flex flex-col">
      <h1 class="pb-5 text-3xl font-bold text-black dark:text-white md:text-6xl">
        Bryan Jade Loplop
      </h1>
      <h2 class="text-gray-700 dark:text-gray-200 sm:text-md md:text-2xl">
        Software Development Engineer
      </h2>
      <p class="py-10 text-gray-600 dark:text-gray-400 sm:text-sm md:text-2xl leading-10">
        I am a Full Stack Software Engineer specialize in backend base in South Cotabato, Philippines.
        <router-link to="/about-me" class="hover:underline hover:decoration-orange-500 hover:decoration-4">
          <span class="flex">More
            <ArrowRightCircleIcon class="md:h-8 md:w-18 sm:h-6 sm:w-6 ml-2" aria-hidden="true" /></span>
        </router-link>
      </p>

      

    </div>
     
     <div >Icon</div>
  </div>

  <FeaturedPost/>
</template>

<script setup>
  import { ArrowRightCircleIcon } from "@heroicons/vue/24/outline"
  import FeaturedPost from "../components/FeaturedPost.vue"
</script>

<style>

</style>