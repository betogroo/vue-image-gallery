export interface Pagination {
  totalPages: number | string
  page: number | string
  nextPage: number | string | null
  prevPage: number | string | null
}
