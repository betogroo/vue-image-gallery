<script setup lang="ts">
import { AppBar } from '@/shared/components'
</script>
<template>
  <v-app>
    <AppBar />
    <v-main>
      <Suspense>
        <RouterView />
        <template #fallback>Loading ...</template>
      </Suspense>
    </v-main>
  </v-app>
</template>
