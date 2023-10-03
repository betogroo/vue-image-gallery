<script setup lang="ts">
import { ImageGallery } from '../components'
import useFetchImages from '../composables/useFetchImages'
const { fetchImages, photos } = useFetchImages()
const url = 'https://api.pexels.com/v1/curated'
await fetchImages(url)
</script>

<template>
  <v-container class="d-flex justify-center align-start fill-height">
    <v-responsive class="text-center">
      <ImageGallery :images="photos" />
    </v-responsive>
  </v-container>
</template>
