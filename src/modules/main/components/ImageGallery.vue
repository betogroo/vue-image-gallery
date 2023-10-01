<script setup lang="ts">
import useFetchImages from '../composables/useFetchImages'
import type { ImagesResults } from '@/shared/models/Images'
const url = 'https://api.pexels.com/v1/curated'
const { fetchImages } = useFetchImages()
const images: ImagesResults | undefined = await fetchImages(url)
console.log(images)
</script>

<template>
  <div>Não há imagens para exibir</div>
  <v-row>
    <v-col
      v-for="item in images?.photos"
      :key="item.id"
      class="d-flex child-flex"
      cols="6"
      md="3"
      sm="4"
    >
      <v-img
        :alt="item.alt"
        cover
        height="100%"
        :src="item.src.tiny"
      ></v-img>
    </v-col>
  </v-row>
</template>
