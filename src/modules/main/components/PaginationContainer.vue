<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Pagination } from '@/shared/models/Pagination'

defineProps<Props>()
const router = useRouter()

interface Props {
  pagination: Pagination
}
</script>

<template>
  <v-sheet min-width="300">
    <v-pagination
      class="my-4"
      :length="pagination.totalPages"
      :v-model="pagination.page"
      @next="router.push(`?page=${pagination.nextPage}`)"
      @prev="router.push(`?page=${pagination.prevPage}`)"
      @update:model-value="(item) => router.push(`?page=${item}`)"
    ></v-pagination>
  </v-sheet>
</template>
