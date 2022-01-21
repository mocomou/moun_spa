export const state = () => ({
  user: {}
})

export const mutations = {
  setIcon (state, userIcon) {
    state.user.use_icon = userIcon
  }
}
