export default interface Order {
  id?: number,
  userId: number,
  productsIds?: number[],
  orderId?: number,
}