import type { ImagesResults } from '@/shared/models/Images'
import { ImagesSchemaWithPhotos } from '@/shared/models/Images'
import { ref } from 'vue'

const error = ref<string | null>('')
const isPending = ref<string | boolean>(false)
const photos = ref<ImagesResults | undefined>(undefined)
const url = ref<string | undefined>(undefined)
const useFetchImages = () => {
  const fetchImages = async (
    url: string,
  ): Promise<ImagesResults | undefined> => {
    try {
      error.value = null
      isPending.value = true
      const res = await fetch(url, {
        headers: {
          Authorization: import.meta.env.VITE_PEXELS_API_KEY,
        },
      })
      if (!res.ok) throw new Error('Erro ao carregar as images')
      const imageResults: ImagesResults = await res.json()

      const parsedData = ImagesSchemaWithPhotos.parse(imageResults)
      if (parsedData.total_results === 0) return undefined
      photos.value = parsedData
      return parsedData
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
  return { photos, url, fetchImages, searchImages }
}

export default useFetchImages
