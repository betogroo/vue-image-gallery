<script setup lang="ts">
import { Photo } from '@/shared/models/Images'
interface Props {
  photo: Photo
}
defineProps<Props>()
const showImg = (photo: Photo) => {
  console.log(photo.id)
}
</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-img
      :alt="photo.alt"
      v-bind="props"
      class="bg-blue-grey-lighten-4 rounded-lg d-flex align-center ma-2"
      :class="{ 'on-hover': isHovering }"
      cover
      height="224"
      :lazy-src="photo.src.tiny"
      :src="photo.src.large"
      @click="showImg(photo)"
    >
      <template v-slot:placeholder>
        <v-row
          align="center"
          class="fill-height ma-0"
          justify="center"
        >
          <v-progress-circular
            color="grey-lighten-5"
            indeterminate
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-hover>
</template>

<style scoped>
.v-img {
  transition: opacity 0.8s ease-in-out;
  transition: transform 0.4s;
  transform: scale(1.05);
}

.v-img:not(.on-hover) {
  transform: scale(1);
  opacity: 0.7;
}
</style>
