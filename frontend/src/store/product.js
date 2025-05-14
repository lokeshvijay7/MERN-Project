import { create } from 'zustand'

const useproductstore = create((set) => ({
  products: [],
  
  setProducts: (products) => set({ products }),

  createProduct: async (newproduct) => {
    if (!newproduct.name || !newproduct.price || !newproduct.image) {
      return { success: false, message: "Fill all fields" }
    }
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(newproduct)
      })
      if (!res.ok) {
        return { success: false, message: `Server error: ${res.status}` }
      }
      const data = await res.json()
      set((state) => ({
        products: [...state.products, data.data]
      }))
      return { success: true, message: "Product created" }
    } catch (error) {
      return { success: false, message: error.message || "Network error" }
    }
  }
}))

export default useproductstore;
