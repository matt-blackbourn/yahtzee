export const CHANGE_PAGE = 'CHANGE_PAGE'

export const changePage = change => {
   return {
      type: CHANGE_PAGE,
      gamePageShowing: change
   }
}
