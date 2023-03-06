<template>
    <div>
        <h1 class="text-2xl font-bold text-black dark:text-white md:text-4xl">Guess Book</h1>
        <div class="w-2/3 py-10">
            <form action="#" class="space-y-8">
                <div>
                    <label for="name" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                    <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Juan Dela Cruz" required>
                </div>
                <div>
                    <label for="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
                        Your email <span class="italic text-sm">* Your email won't be on public display.</span>
                    </label>
                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="juandelacruz@email.com" required>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button disabled type="submit" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Send message</button>
            </form>
        </div>
    </div>
</template>

<script setup>
    import guessbookData from '../assets/guessbook.json'

    const guessbookItems = guessbookData;
</script>

<style>

</style>