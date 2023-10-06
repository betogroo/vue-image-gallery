<script setup lang="ts">
import { watch } from 'vue'
import { ImageGallery, PaginationContainer } from '../components'
import useFetchImages from '../composables/useFetchImages'

const props = defineProps<Props>()
import { toRefs } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const { fetchImages, photos } = useFetchImages()
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
</script>

<template>
  <v-container>
    <v-responsive v-if="photos">
      <h1 v-if="term !== 'curated'">
        Resultados para {{ term }}, mostrando página {{ page }}
      </h1>
      <ImageGallery :images="photos" />
      <PaginationContainer :photos="photos" />
    </v-responsive>
    <v-responsive v-else>Algo deu Errado</v-responsive>
  </v-container>
</template>
