<script setup lang="ts">
import { ref, watch } from 'vue'
import { ImageGallery, PaginationContainer } from '../components'
import type { Pagination } from '@/shared/models/Pagination'
import useFetchImages from '../composables/useFetchImages'
import { toRefs } from 'vue'
import { useRoute } from 'vue-router'
const props = defineProps<Props>()
const route = useRoute()
const { fetchImages, photos, nextPage, prevPage, totalPages } = useFetchImages()
interface Props {
  term: string
  page: number
}
const { term, page } = toRefs(props)

await fetchImages(term.value, page.value)
watch(
  () => route.params,
  async () => {
    await fetchImages(term.value, page.value)
  },
)

const pagination = ref<Pagination>({
  nextPage: nextPage,
  prevPage: prevPage,
  totalPages: totalPages,
  page: page.value,
})
</script>

<template>
  <v-container>
    <v-responsive>
      <h1 v-if="term !== 'curated'">
        Resultados para {{ term }}, mostrando página {{ page }}
      </h1>
      <ImageGallery :images="photos" />
      <PaginationContainer :pagination="pagination" />
    </v-responsive>
  </v-container>
</template>
