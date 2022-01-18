export const state = () => ({
  active: false
})

export const mutations = {
  setting (state) {
    state.active = true
  },
  profile (state) {
    state.active = false
  }
}
