<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMainStore } from '../store/useMainStore'
const store = useMainStore()
const { name } = storeToRefs(store)
</script>

<template>
  <v-container class="d-flex justify-center align-start fill-height">
    <v-responsive
      class="text-center"
      max-width="250"
    >
      <h1 class="text-center text-h5">{{ name }}</h1>
    </v-responsive>
  </v-container>
</template>
