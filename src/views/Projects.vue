<template>
  <div>
    <div v-if="showTitle == true" class="flex justify-center text-2xl font-bold text-black dark:text-white md:text-6xl" >
      Project Portolio 
    </div>

    <div v-else="showTitle != true" class="text-2xl font-bold text-black dark:text-white md:text-4xl">Recent Project</div>
   
    <div class="py-20 ">
      <section class="w-full grid grid-cols-3 gap-4">
        <ProjectItem v-for="(item, index) in projectItems.projects" :projectDetails="item" />
      </section>
    </div>

  </div>
</template>

<script setup>
import ProjectItem from '../components/ProjectItem.vue';
import { useProjectsStore } from "@/stores/projects"

const projectItems = useProjectsStore()

const props = defineProps({
  showTitle: {
      type: Boolean,
      default: true,
      required: true
    },
})


</script>

<style></style>