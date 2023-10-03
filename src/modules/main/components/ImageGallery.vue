<script setup lang="ts">
import { ImagesResults } from '@/shared/models/Images'
import { ImageContainer } from '.'

interface Props {
  images: ImagesResults | undefined
}
defineProps<Props>()

const imageLayout = [
  { cols: 4 },
  {
    cols: 4,
    //children: [{ cols: 12 }, { cols: 12 }],
  },
  { cols: 4 },
  {
    cols: 3,

    //children: [{ cols: 12 }, { cols: 12 }]
  },
  { cols: 6 },
  { cols: 3 },
  { cols: 6 },
  { cols: 2 },
  { cols: 4 },
  { cols: 5 },
  { cols: 4 },
  { cols: 3 },
  { cols: 4 },
  { cols: 8 },
  { cols: 6 },
]
</script>

<template>
  <v-sheet max-width="1024">
    <v-row
      v-if="images"
      dense
      justify="center"
    >
      <template
        v-for="(photo, index) in images.photos"
        :key="photo.id"
      >
        <v-col
          class="d-flex child-flex justify-center"
          cols="6"
          :md="imageLayout[index].cols"
        >
          <ImageContainer :photo="photo" />
        </v-col>
      </template>
    </v-row>
  </v-sheet>
</template>
