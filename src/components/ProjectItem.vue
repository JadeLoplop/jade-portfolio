<template>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <router-link :to="slugPath" href="#">
            <img class="rounded-t-lg md:h-48 md:w-full" :src="imageSrc" alt="" />
            
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                        {{ title }}
                    </h5>
                </a>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "project-items",
    data: () => ({

    }),
    props: {
        title: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        imageSrc: {
            type: String,
            required: true
        },
    },
    computed: {
        slugPath () {
            return '/projects' + this.slug;
        }
    }
}


</script>