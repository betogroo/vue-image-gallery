<script setup lang="ts">
import { useMainStore } from '@/modules/main/store/useMainStore'
const store = useMainStore()
const { name } = store
</script>
<template>
  <v-app-bar
    color="blue"
    density="compact"
  >
    <v-app-bar-title>
      <RouterLink
        class="text-white text-decoration-none"
        :to="{ name: 'HomeView' }"
        >{{ name }}</RouterLink
      >
    </v-app-bar-title>
    <div class="ma-3">
      <RouterLink
        class="text-white text-decoration-none"
        :to="{ name: 'HomeView' }"
        >Home</RouterLink
      >
      |
      <RouterLink
        class="text-white text-decoration-none"
        :to="{ name: 'AboutView' }"
        >About</RouterLink
      >
    </div>
  </v-app-bar>
</template>
