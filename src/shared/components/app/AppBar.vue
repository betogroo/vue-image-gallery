<script setup lang="ts">
import { ref } from 'vue'
import { useMainStore } from '@/modules/main/store/useMainStore'
import { useDisplay } from 'vuetify/lib/framework.mjs'
const { mobile } = useDisplay()
const store = useMainStore()
const { name } = store
const searchText = ref('')
const handleSearch = () => {
  console.log(searchText.value)
}
</script>
<template>
  <v-app-bar
    color="blue"
    :density="mobile ? 'prominent' : 'compact'"
  >
    <v-row
      align="center"
      class="mx-3 text-center"
      dense
    >
      <v-col
        class="text-left"
        cols="6"
        md="4"
      >
        <v-app-bar-title>
          <RouterLink
            class="text-white text-decoration-none"
            :to="{ name: 'HomeView' }"
            >{{ name }}</RouterLink
          >
        </v-app-bar-title>
      </v-col>
      <v-col
        :cols="mobile ? '12' : ''"
        :order="mobile ? 'last' : ''"
      >
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
          @click:append-inner="handleSearch"
        />
      </v-col>
      <v-col md="3">
        <div class="ma-3 text-right">
          <RouterLink
            class="text-white text-decoration-none"
            :to="{ name: 'HomeView' }"
            >Home</RouterLink
          >
          |
          <RouterLink
            class="text-white text-decoration-none"
            :to="{ name: 'AboutView' }"
            >About</RouterLink
          >
        </div>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
