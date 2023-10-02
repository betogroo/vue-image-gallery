<script setup lang="ts">
import { ImageContainer } from '.'

const imageLayout = [
  { cols: 4 },
  {
    cols: 8,
    children: [{ cols: 12 }, { cols: 12 }],
  },
  { cols: 6 },
  { cols: 3 },
  { cols: 9 },
  { cols: 4 },
  { cols: 8 },
]
</script>

<template>
  <v-row
    justify="center"
    no-gutters
  >
    <v-col
      v-for="(x, y) in 15"
      :key="x * y"
      class="d-flex child-flex ma-1 pa-1"
      cols="12"
      md="3"
      sm="4"
    >
      <ImageContainer />
    </v-col>
  </v-row>
</template>
