<script setup lang="ts">
import { ImageGallery } from '../components'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../store/useMainStore'
const store = useMainStore()
const { name } = storeToRefs(store)
</script>

<template>
  <v-container class="d-flex justify-center align-start fill-height">
    <v-responsive class="text-center">
      <ImageGallery />
    </v-responsive>
  </v-container>
</template>
