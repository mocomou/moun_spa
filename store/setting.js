export const state = () => ({
  active: false
})

export const mutations = {
  closeComponent (state) {
    state.active = !state.active
  },
  openComponent (state) {
    state.active = false
  }
}
