<script setup lang="ts">
import { ImagesResults } from '@/shared/models/Images'
import { ImageContainer } from '.'

interface Props {
  images: ImagesResults | undefined
}
defineProps<Props>()
</script>

<template>
  <v-row
    v-if="images"
    dense
    justify="center"
  >
    <v-col
      v-for="photo in images.photos"
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
