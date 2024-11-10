export function saveProductId(productId) {
  localStorage.removeItem('selectedProductId')
  localStorage.setItem('selectedProductId', productId)
}

export function getProductId() {
  return localStorage.getItem('selectedProductId')
}

export function clearProductId() {
  localStorage.removeItem('selectedProductId')
}
