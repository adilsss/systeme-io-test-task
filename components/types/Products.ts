export interface ProductsType {
  id: number
  name: string
  active: boolean
  createdAt: string
  options: {
    size: string
    amount: number
  }
}
