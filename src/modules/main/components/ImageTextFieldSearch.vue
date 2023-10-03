<script setup lang="ts">
import { ref } from 'vue'

const $emit = defineEmits<{
  handleSearch: [text: string]
}>()

const searchText = ref('')
</script>

<template>
  <v-text-field
    v-model="searchText"
    append-inner-icon="mdi-magnify"
    center-affix
    density="compact"
    hide-details
    label="Procurar Imagens"
    placeholder="Digite um termo para a pesquisa"
    prepend-inner-icon="mdi-image-search"
    variant="solo-filled"
    @click:append-inner="$emit('handleSearch', searchText)"
  />
</template>
