<script setup lang="ts">
import { ImagesResults } from '@/shared/models/Images'
import { ImageContainer } from '.'
import { useRouter } from 'vue-router'
const props = defineProps<Props>()
const router = useRouter()
import { toRefs } from 'vue'

interface Props {
  images: ImagesResults | undefined
}
const { images } = toRefs(props)

const totalPages = images.value
  ? Math.ceil(images.value?.total_results / images.value?.per_page)
  : 0

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
      </v-row>
      <v-container>
        <v-responsive max-width="85vw">
          <v-pagination
            class="my-4"
            :length="totalPages"
            :model-value="images?.page"
            @next="router.push(`?page=${images?.page! + 1}`)"
            @prev="router.push(`?page=${images?.page! - 1}`)"
            @update:model-value="(item) => router.push(`?page=${item}`)"
          ></v-pagination>
        </v-responsive>
      </v-container>
    </v-responsive>
  </v-container>
</template>
