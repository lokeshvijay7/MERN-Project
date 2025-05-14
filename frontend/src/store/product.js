import { create } from 'zustand'

const useproductstore = create((set) => ({
  products: [],
  
  setProducts: (products) => set({ products }),

  createProduct: async (newproduct) => {
    if (!newproduct.name || !newproduct.price || !newproduct.image) {
      return { success: false, message: "Fill all fields" }
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newproduct)
    })
    const data = await res.json()
    set((state) => ({
      products: [...state.products, data.data]
    }))
    
    return { success: true, message: "Product created" }
  }
}))

export default useproductstore;