<script setup lang="ts">
import { ref, watch } from 'vue'
import ImageGallery from '../components/ImageGallery.vue'
interface Props {
  term: string
}
const props = defineProps<Props>()
</script>

<template>
  <v-container>
    <v-responsive>
      <h1>Resultados para {{ term }}</h1>
      <ImageGallery :topic="term" />
    </v-responsive>
  </v-container>
</template>
