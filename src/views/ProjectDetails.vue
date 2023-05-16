<template>
    <div class="grid grid-cols-2 gap-4">

        <div class="tracking-wide">
            <div class="grid grid-rows-2 grid-flow-col">
                <div>
                    <div class="text-3xl font-extrabold text-white">
                        {{ projectStore.singleProject.title }}
                    </div>
                    <div class="text-gray-400">
                        {{ projectStore.singleProject.time }}
                    </div>
                </div>
                <div>
                    <div class="text-2xl text-white font-bold pb-5">About Client</div>
                    <div class="grid">
                        <span>Name: {{ projectStore.singleProject.client_info.name }}</span> 
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { useProjectsStore } from "@/stores/projects"
import { ref, onBeforeUnmount } from 'vue'

const props = defineProps({
    id: {
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
})

const projectStore = useProjectsStore()


onBeforeUnmount(async() => {
   await projectStore.getProjectDetailsByID(props.id)
})


</script>

<style scoped></style>