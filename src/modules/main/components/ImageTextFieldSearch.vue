<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const route = useRouter()

const searchTerm = ref('')
const handleSearch = () => {
  route.push({ name: 'HomeView', params: { term: searchTerm.value } })
}
</script>

<template>
  <v-text-field
    v-model="searchTerm"
    append-inner-icon="mdi-magnify"
    center-affix
    density="compact"
    hide-details
    label="Procurar Imagens"
    placeholder="Digite um termo para a pesquisa"
    prepend-inner-icon="mdi-image-search"
    rounded="lg"
    variant="solo"
    @click:append-inner="handleSearch"
    v-on:keyup.enter="handleSearch"
  />
</template>
