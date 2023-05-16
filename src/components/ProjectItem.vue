<template>
    <a :href="projectDetails.client_info.website" target="_blank">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <!-- <router-link :to="slugPath" href="#"> -->
                <img class="rounded-t-lg md:h-48 md:w-full" :src="projectDetails.imageSrc" alt="" />
                
            
                    <div class="p-5 grid grid-cols-1">
                        
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            {{ projectDetails.title }}
                        </h5>
                        <span class="text-gray-300 text-xs text-center p-3 font-bold">{{ projectDetails.time }}</span>
                        <span class="text-gray-300 text-sm text-justify italic pb-3">{{ projectDetails.client_info.services }}</span>
                    
                    </div>
                
            <!-- </router-link> -->
        </div>
    </a>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    projectDetails: {
        required: true
    },
})

const slugPath = computed(() => {
    return  `/projects/${props.projectDetails.id }` + props.projectDetails.slug 
})



</script>