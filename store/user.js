export const state = () => ({
  user: {}
})

export const mutations = {
  setIcon (state, user_icon) {
    state.user.user_icon = user_icon
  }
}
