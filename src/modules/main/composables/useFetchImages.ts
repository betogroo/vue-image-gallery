import type { ImagesResults } from '@/shared/models/Images'
import { ImagesSchemaWithPhotos } from '@/shared/models/Images'
import { ref } from 'vue'

const error = ref<string | null>('')
const isPending = ref<string | boolean>(false)
const photos = ref<ImagesResults | undefined>(undefined)
const url = ref<string | undefined>(undefined)
const baseUrl = 'https://api.pexels.com/v1/'
const useFetchImages = () => {
  const buildUrl = (term: string, page: number) => {
    url.value = baseUrl
    if (term === 'curated') {
      url.value += 'curated'
    } else {
      url.value += `search?query=${encodeURIComponent(term)}`
    }
    if (page > 1) {
      const q = term !== 'curated' ? '&' : '?'
      url.value += `${q}page=${page}`
    }
  }

  const fetchImages = async (term: string, page: number) => {
    try {
      buildUrl(term, page)
      if (url.value === undefined)
        throw new Error('Erro ao carregar as imagens (Url indefinida)')
      error.value = null
      isPending.value = true
      const res = await fetch(url.value, {
        headers: {
          Authorization: import.meta.env.VITE_PEXELS_API_KEY,
        },
      })
      if (!res.ok) throw new Error('Erro ao carregar as imagens')
      const imageResults: ImagesResults = await res.json()

      const parsedData = ImagesSchemaWithPhotos.parse(imageResults)
      if (parsedData.total_results === 0) return undefined
      photos.value = parsedData
    } catch (err) {
      const e = err as Error
      error.value = e.message
      if (e instanceof Error) console.log(e.stack)
    } finally {
      isPending.value = false
    }
  }

  const searchImages = (term: string) => {
    console.log('vai buscar o ', term)
  }
  return { photos, baseUrl, url, fetchImages, searchImages, buildUrl }
}

export default useFetchImages
