<template>
  <div class="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
    
    <Navigator />
    <router-view></router-view>

  </div>
</template>

<script setup>
  import Navigator from './components/Navigator.vue'

  // This starter template is using Vue 3 experimental <script setup> SFCs
  // Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
</style>