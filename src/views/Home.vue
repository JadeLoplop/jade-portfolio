<template>

  <div class="px-1 grid grid-cols-3 gap-4">
    <div class="col-span-2 py-8 flex flex-col">
      <h1 class="pb-5 text-3xl font-bold text-black dark:text-white md:text-6xl">
        Bryan Jade Loplop
      </h1>
      <h2 class="text-orange-400 sm:text-md md:text-2xl">
        Software Development Engineer
      </h2>
      <p class="py-10 text-gray-600 dark:text-gray-400 sm:text-sm md:text-2xl leading-10">
        I am a Full Stack Software Engineer specialized in backend base in South Cotabato, Philippines.
        <router-link to="/about-me" class="hover:underline hover:decoration-orange-500 hover:decoration-4">
          <span class="flex">More
            <ArrowRightCircleIcon class="md:h-8 md:w-18 sm:w-18 sm:h-8 ml-2" aria-hidden="true" /></span>
        </router-link>
      </p>

      

    </div>
     
     <!-- <div >BRYAN JADE LOPLOP</div> -->
  </div>

  <FeaturedPost/>
  <!-- <GuessBook/> -->
</template>

<script setup>
  import { ArrowRightCircleIcon } from "@heroicons/vue/24/outline"
  import FeaturedPost from "../components/FeaturedPost.vue"
  import GuessBook from "../components/GuessBook.vue";
</script>

<style>

</style>