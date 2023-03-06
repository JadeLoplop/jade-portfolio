<template>
  <div>
    <div v-if="showTitle == true" class="flex justify-center text-2xl font-bold text-black dark:text-white md:text-6xl" >
      Project Portolio 
    </div>

    <div v-else="showTitle != true" class="text-2xl font-bold text-black dark:text-white md:text-4xl">Recent Project</div>
    
    <div class="py-20 ">
      <section class="w-full grid grid-cols-3 gap-4">
        <ProjectItem v-for="(item, index) in projectItems" :key="index" :title="item.title" :slug="item.slug"
          :image-src="item.imageSrc" />
      </section>
    </div>

  </div>
</template>

<script>
import ProjectItem from '../components/ProjectItem.vue';

export default {
  name: "projects",
  data: () => ({
    projectItems: [
      {
        title: 'Hisense Official Website',
        slug: '/hisense-official-website',
        imageSrc: '../../assets/hisense/1.png',
      },
      {
        title: 'Kolours Official Website',
        slug: '/kolours-official-website',
        imageSrc: '../../assets/kolours/1.png',
      },
      {
        title: 'Hygienix Official Website',
        slug: '/hygienix-official-website',
        imageSrc: '../../assets/hygienix/1.png',
      },


    ],
  }),
  props: {
    showTitle: {
      type: Boolean,
      default: true,
      required: true
    },
  },
  components: {
    ProjectItem
  }
}


</script>

<style></style>