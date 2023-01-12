// Hamburger
;(() => {
  const hamburgerEl = document.querySelector('.hamburger')
  if (!hamburgerEl) return

  let active = false

  hamburgerEl.addEventListener('click', (e) => {
    window.dispatchEvent(
      new CustomEvent('toggle-nav', { detail: (active = !active) })
    )
  })

  window.addEventListener('toggle-nav', ({ detail: open }) => {
    hamburgerEl.classList.toggle('hamburger_active', open)
  })
})()

// Nav
;(() => {
  const navEl = document.querySelector('.nav')
  if (!navEl) return

  let top = 0

  window.addEventListener('toggle-nav', ({ detail: open }) => {
    navEl.classList.toggle('nav_open', open)
    if (open) {
      top = window.scrollY
      Object.assign(document.body.style, {
        overflow: 'hidden'
        // position: 'fixed',
        // top: `${top * -1}px`
      })
    } else {
      Object.assign(document.body.style, {
        overflow: ''
        // position: '',
        // top: ''
      })
      // window.scrollTo(0, top)
    }
  })
})()
