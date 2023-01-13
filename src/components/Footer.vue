<template>
    <div class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
        <div class="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div class="flex flex-col items-start space-y-10">
                <router-link v-for="item in navigation" :key="item.path" :to="item.path"
                    class="text-gray-500 transition-colors md:text-xl hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200/80">
                    {{ item.name }}
                </router-link>
            </div>
            <div class="flex flex-col items-start space-y-4">
                <div class="flex flex-col items-start space-y-10">
                    <a v-for="item in socmed" :key="item.path" :href="item.path" target="_blank"
                        class="text-gray-500 transition-colors md:text-xl hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200/80">
                        {{ item.name }}
                    </a>
                </div>
            </div>
            <div class="flex flex-col items-start space-y-4">
                <div class="flex flex-col items-start space-y-10">
                    <router-link v-for="item in entertainment" :key="item.path" :to="item.path"
                        class="text-gray-500 transition-colors md:text-xl hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200/80">
                        {{ item.name }}
                    </router-link>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
    import {
        useRouter
    } from 'vue-router'

    const router = useRouter();

    const navigation = router.options.routes;

    const socmed = [{
            'path': 'https://www.facebook.com/bryanjade.loplop/',
            'name': 'Facebook',
        },
        {
            'path': 'https://www.linkedin.com/in/bryan-jade-loplop-8721a21a0/',
            'name': 'LinkedIn',
        },
        {
            'path': 'https://github.com/JadeLoplop',
            'name': 'Github',
        },
    ];


    const entertainment = [{
            'path': '/anime',
            'name': 'Anime',
        },
        {
            'path': '/novels',
            'name': 'Novels',
        },
        {
            'path': '/manga',
            'name': 'Manga',
        },
    ];
</script>

<style>

</style>