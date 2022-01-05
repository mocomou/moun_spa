export const state = () => ({
  active: false
})

export const mutations = {
  toggleMenu (state) {
    state.active = !state.active
  },
  resetMenu (state) {
    state.active = false
  }
}
