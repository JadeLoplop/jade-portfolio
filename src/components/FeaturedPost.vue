<template>
    <div>
        <h1 class="text-2xl font-bold text-black dark:text-white md:text-6xl">Featured Project</h1>

        <div class="py-20 ">
            <section class="flex md:h-80 w-full flex-col gap-6 md:flex-row ">
                <div class="border-8 border-orange-500 w-full rounded-xl bg-gradient-to-r p-1 md:w-1/3">
                    <div class="flex h-full flex-col justify-between rounded-lg  p-4">
                        <div class="flex flex-col justify-between md:flex-row h-full">
                            <h4 class="mb-6 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-3xl">
                                Project 1
                            </h4>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div class="border-8 border-orange-500 w-full rounded-xl bg-gradient-to-r p-1 md:w-1/3">
                    <div class="flex h-full flex-col justify-between rounded-lg  p-4">
                        <div class="flex flex-col justify-between md:flex-row h-full">
                            <h4 class="mb-6 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-3xl">
                                Project 2
                            </h4>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div class="border-8 border-orange-500 w-full rounded-xl bg-gradient-to-r p-1 md:w-1/3">
                    <div class="flex h-full flex-col justify-between rounded-lg  p-4">
                        <div class="flex flex-col justify-between md:flex-row h-full">
                            <h4 class="mb-6 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-3xl">
                                Project 3
                            </h4>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <router-link class="flex h-6 items-center rounded-lg md:text-xl transition-all hover:underline hover:decoration-orange-500 hover:decoration-4"
            to="/projects">See all projects<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                class="ml-1 h-6 w-6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"></path>
            </svg>
        </router-link>


    </div>
</template>

<script>
    export default {

    }
</script>

<style>

</style>