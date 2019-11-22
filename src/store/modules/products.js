import { productService } from '@/services'

const state = {
    products: [],
    product: {
        name: '',
        description: '',
        price: 0.00,
        brand: ''
    }
}

const getters = {
    totalValue(state) {
        return state.products.reduce((total, product) => total + product.quantity * product.price, 0)
    }
}

const actions = {
    fetchAllProducts({ commit }) {
        return productService.getAll().then(response => {
            const products = [...response.data].map(product => ({ ...product, quantity: 0 }))
            commit('setProducts', products)
        })
    },
    getProductById({ commit }, payload) {
        console.log(payload);
        return productService.getById(payload.productId).then(response => {
            const product = response.data
            commit('setProduct', product)
        })
    }
}

const mutations = {
    decreaseProductQuantity(state, productId) {
        const product = state.products.find(product => product.id === productId)
        if (product.quantity > 0)
            product.quantity--
    },
    increaseProductQuantity(state, productId) {
        const product = state.products.find(product => product.id === productId)
        product.quantity++
    },
    setProducts(state, payload) {
        state.products = payload
    },
    setProduct(state, product) {
        state.product = product
    }

}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
  