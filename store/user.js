export const state = () => ({
  userName: '',
  userIcon: '',
  loggedIn: false
})

export const mutations = {
  setUser (state, data) {
    state.loggedIn = data.loggedIn
    state.userName = data.userName
    state.userIcon = data.userIcon
  },
  logout () {
    state.loggedIn = false
    state.userName = ''
    state.userIcon = ''
  }
}
