<script setup lang="ts">
import { useMainStore } from '@/modules/main/store/useMainStore'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import { ImageTextFieldSearch } from '@/modules/main/components'
const store = useMainStore()
const { name } = store
const { mobile } = useDisplay()
</script>
<template>
  <v-app-bar
    color="blue"
    density="comfortable"
    extension-height="80"
  >
    <template v-slot:title>
      <RouterLink
        class="text-white text-decoration-none"
        :to="{ name: 'HomeView' }"
        >{{ name }}</RouterLink
      >
    </template>

    <template
      v-if="!mobile"
      v-slot:default
    >
      <ImageTextFieldSearch />
    </template>
    <template
      v-else
      v-slot:extension
    >
      <ImageTextFieldSearch class="px-5" />
    </template>
    <template v-slot:append>
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
    </template>
  </v-app-bar>
</template>
