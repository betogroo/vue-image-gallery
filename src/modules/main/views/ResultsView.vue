<script setup lang="ts">
import { ref, watch } from 'vue'
import ImageGallery from '../components/ImageGallery.vue'
import useFetchImages from '../composables/useFetchImages'
import { toRefs } from 'vue'
import { useRoute } from 'vue-router'
const props = defineProps<Props>()
const route = useRoute()
const { fetchImages, photos, url, baseUrl, buildUrl } = useFetchImages()
interface Props {
  term: string
  page: number
}
const { term, page } = toRefs(props)

//if (!url.value) {
buildUrl(term.value, page.value)
console.log(url.value)
await fetchImages(url.value!)
//}
watch(
  () => route.params,
  async () => {
    console.log(term.value)
    buildUrl(term.value, page.value)
    await fetchImages(url.value!)
  },
)
</script>

<template>
  <v-container>
    <v-responsive>
      <p>page {{ page }}</p>
      <p>term {{ term }}</p>
      {{ url }}
      <h2>{{ route.params }}</h2>
      <h2>{{ term }}</h2>
      <h1>Resultados para {{ term }}, mostrando página {{ page }}</h1>
      <ImageGallery :images="photos" />
    </v-responsive>
  </v-container>
</template>
