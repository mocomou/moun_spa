import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    active: false
  },
  mutations: {
    toggleMenu (state) {
      state.active = !state.active
    },
    resetMenu (state) {
      state.active = false
    }
  }
})

export default store
