<script setup lang="ts">
import { watch } from 'vue'
import ImageGallery from '../components/ImageGallery.vue'
import useFetchImages from '../composables/useFetchImages'
import { toRefs } from 'vue'
import { useRoute } from 'vue-router'
const props = defineProps<Props>()
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
    <v-responsive>
      <h1 v-if="term !== 'curated'">
        Resultados para {{ term }}, mostrando página {{ page }}
      </h1>
      <ImageGallery :images="photos" />
    </v-responsive>
  </v-container>
</template>
