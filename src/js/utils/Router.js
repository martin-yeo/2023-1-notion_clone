
export const initRouter = ( onRoute ) => {
  window.addEventListener('route-change', (e) => {
    const { nextUrl } = e.edtail

    if (nextUrl) {
      history.pushState(null, null, nextUrl)
      onRoute()
    }
  })  
}

export const pushUrl = ( nextUrl ) => {
  window.dispatchEvent(
    new CustomEvent('route-chang', () => {
      detail: {
        nextUrl
      }
    })
  )
}

export const popUrl = ( onRoute ) => {

}

