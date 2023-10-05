<script setup lang="ts">
import { watch } from 'vue'
import ImageGallery from '../components/ImageGallery.vue'
import useFetchImages from '../composables/useFetchImages'
import { useRouter } from 'vue-router'
const props = defineProps<Props>()
const router = useRouter()
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
const totalPages =
  photos.value!.total_results % photos.value!.per_page
    ? Math.ceil(photos.value!.total_results / photos.value!.per_page)
    : photos.value!.total_results / photos.value!.per_page + 1
</script>

<template>
  <v-container>
    <v-responsive>
      <h1 v-if="term !== 'curated'">
        Resultados para {{ term }}, mostrando página {{ page }}
      </h1>
      <ImageGallery :images="photos" />
      <v-pagination
        class="my-4"
        :length="totalPages"
        :model-value="photos?.page"
        @next="router.push(`?page=${photos?.page! + 1}`)"
        @prev="router.push(`?page=${photos?.page! - 1}`)"
        @update:model-value="(item) => router.push(`?page=${item}`)"
      ></v-pagination>
    </v-responsive>
  </v-container>
</template>
