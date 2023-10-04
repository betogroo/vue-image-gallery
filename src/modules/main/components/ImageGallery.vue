<script setup lang="ts">
import { ImagesResults } from '@/shared/models/Images'
import { ImageContainer } from '.'

interface Props {
  images: ImagesResults | undefined
}
defineProps<Props>()

const webLayout = [
  { cols: 4 },
  { cols: 4 },
  { cols: 4 },

  { cols: 2 },
  { cols: 4 },
  { cols: 3 },
  { cols: 3 },

  { cols: 4 },
  { cols: 3 },
  { cols: 5 },

  { cols: 8 },
  { cols: 4 },

  { cols: 2 },
  { cols: 7 },
  { cols: 3 },
]
const mobileLayout = [
  { cols: 4 },
  { cols: 8 },

  { cols: 3 },
  { cols: 6 },
  { cols: 3 },

  { cols: 4 },
  { cols: 4 },
  { cols: 4 },

  { cols: 6 },
  { cols: 6 },

  { cols: 8 },
  { cols: 4 },

  { cols: 3 },
  { cols: 6 },
  { cols: 3 },
]
</script>

<template>
  <v-container class="d-flex justify-center">
    <v-responsive max-width="1024">
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
            :cols="mobileLayout[index].cols"
            :md="webLayout[index].cols"
          >
            <ImageContainer :photo="photo" />
          </v-col>
        </template>
        <RouterLink
          v-if="images.page === 1"
          :to="`?page=${images.page + 1}`"
          >Ver mais</RouterLink
        >
      </v-row>
    </v-responsive>
  </v-container>
</template>
