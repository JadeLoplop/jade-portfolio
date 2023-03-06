<template>
    <div class="pb-5">
       
        <Projects :show-title="false" />

        <router-link
            class="flex h-6 items-center rounded-lg md:text-xl transition-all hover:underline hover:decoration-orange-500 hover:decoration-4"
            to="/projects">See all projects<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                class="ml-1 h-6 w-6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"></path>
            </svg>
        </router-link>


    </div>
</template>

<script>
import Projects from '../views/Projects.vue';

export default {
    components: { Projects }
}
</script>

<style></style>