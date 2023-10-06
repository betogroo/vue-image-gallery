<script setup lang="ts">
import type { ImagesResults } from '@/shared/models/Images'
import { toRefs } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps<Props>()
const router = useRouter()
interface Props {
  photos: ImagesResults
}
const { photos } = toRefs(props)

let totalPages: number
if (photos.value)
  totalPages =
    photos.value.total_results % photos.value.per_page
      ? Math.ceil(photos.value.total_results / photos.value.per_page)
      : photos.value.total_results / photos.value.per_page + 1
</script>

<template>
  <v-row
    class="px-4"
    dense
  >
    <v-col v-if="photos.page > 1">
      <v-pagination
        active-color="blue"
        border
        class="px-4"
        density="comfortable"
        :length="totalPages"
        :model-value="photos?.page"
        size="large"
        variant="text"
        @next="router.push(`?page=${photos?.page! + 1}`)"
        @prev="router.push(`?page=${photos?.page! - 1}`)"
        @update:model-value="(item) => router.push(`?page=${item}`)"
      ></v-pagination>
    </v-col>
    <v-col
      v-else
      class="text-center"
    >
      <RouterLink :to="'?page=2'"> Ver mais Imagens</RouterLink>
    </v-col>
  </v-row>
</template>
