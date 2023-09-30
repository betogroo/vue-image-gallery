// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const name = ref('Vue Image Gallery')

  return { name }
})
