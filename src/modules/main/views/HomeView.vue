<script setup lang="ts">
import { ImageGallery } from '../components'
import useFetchImages from '../composables/useFetchImages'
const { fetchImages, photos, baseUrl } = useFetchImages()
const url = `${baseUrl}curated`
await fetchImages(url)
</script>

<template>
  <v-container class="d-flex justify-center align-start fill-height">
    <v-responsive class="text-center">
      <ImageGallery :images="photos" />
    </v-responsive>
  </v-container>
</template>
