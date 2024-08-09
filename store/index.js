export const state = () => ({
  searchPopupStatus: false
})

export const mutations = {
  changeSearchPopupStatus(state) {
    state.searchPopupStatus = !state.searchPopupStatus
  }
}
