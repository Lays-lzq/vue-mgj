import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList:[]
  },
  mutations: {
    addCounter(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload){
      return new Promise((resolve, reject) => {
          let oldproduct = null
        for(let item of context.state.cartList){
          if(item.iid == payload.iid){
            oldproduct = item
          }
        }
        // let oldproduct = context.state.cartList.find(item => item.iid === payload.iid)
        if(oldproduct){
          context.commit("addCounter",oldproduct)
          resolve('商品数量+1')
        }else {
          payload.count = 1
          payload.checked = true
          // context.cartList.push(payload)
          context.commit('addToCart',payload)
          resolve('商品添加到购物车')
        }
      }) 
    }
  },
  modules: {
  },
  getters: {
    cartLength(state) {
      return state.cartList.length
    },
    cartList(state) {
      return state.cartList
    }
  }
})
