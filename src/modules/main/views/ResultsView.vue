<script setup lang="ts">
import { watch } from 'vue'
import ImageGallery from '../components/ImageGallery.vue'
import useFetchImages from '../composables/useFetchImages'
const props = defineProps<Props>()
const { fetchImages, photos, url } = useFetchImages()
interface Props {
  term: string
  page: number
}
if (!url.value) {
  url.value = `https://api.pexels.com/v1/search?query=${props.term}`
  console.log(url.value)
  await fetchImages(url.value)
}
watch(
  () => props.term,
  async (newUrl) => {
    url.value = `https://api.pexels.com/v1/search?query=${newUrl}`
    await fetchImages(url.value)
  },
)
</script>

<template>
  <v-container>
    <v-responsive>
      <h1>Resultados para {{ term }}, mostrando página {{ page }}</h1>
      <ImageGallery :images="photos" />
    </v-responsive>
  </v-container>
</template>
