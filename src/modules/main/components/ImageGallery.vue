<script setup lang="ts">
import { ImageContainer } from '.'
import useFetchImages from '../composables/useFetchImages'
const { fetchImages } = useFetchImages()
const images = await fetchImages('https://api.pexels.com/v1/curated')

const imageLayout = [
  { cols: 4 },
  {
    cols: 8,
    children: [{ cols: 12 }, { cols: 12 }],
  },
  { cols: 6 },
  { cols: 3 },
  { cols: 9 },
  { cols: 4 },
  { cols: 8 },
]
</script>

<template>
  <v-row
    dense
    justify="center"
  >
    <v-col
      v-for="photo in images?.photos"
      :key="photo.id"
      class="d-flex child-flex justify-center"
      cols="6"
      md="3"
      sm="4"
    >
      <ImageContainer :photo="photo" />
    </v-col>
  </v-row>
</template>
