// Hamburger
// ;(() => {
//   const hamburgerEl = document.querySelector('.hamburger')
//   if (!hamburgerEl) return

//   let active = false

//   hamburgerEl.addEventListener('click', (e) => {
//     window.dispatchEvent(
//       new CustomEvent('toggle-nav', { detail: (active = !active) })
//     )
//   })

//   window.addEventListener('toggle-nav', ({ detail: open }) => {
//     hamburgerEl.classList.toggle('hamburger_active', open)
//   })
// })()

// Nav
// ;(() => {
//   const navEl = document.querySelector('.nav')
//   if (!navEl) return

//   const commentNode = document.createComment('.nav')

//   // let top = 0

//   function onClosed(e) {
//     console.log('transitionend')

//     commentNode.replaceWith(navEl)
//     // document.body.appendChild(navEl)
//     // navEl.offsetWidth
//   }

//   window.addEventListener('toggle-nav', ({ detail: open }) => {
//     // navEl.classList.toggle('nav_open', open)
//     if (open) {
//       navEl.replaceWith(commentNode)
//       document.body.appendChild(navEl)
//       navEl.offsetWidth
//       navEl.classList.add('nav_open')

//       navEl.removeEventListener('transitionend', onClosed)

//       // top = window.scrollY
//       Object.assign(document.body.style, {
//         overflow: 'hidden'
//         // position: 'fixed',
//         // top: `${top * -1}px`
//       })
//     } else {
//       navEl.classList.remove('nav_open')

//       navEl.addEventListener('transitionend', onClosed, { once: true })

//       Object.assign(document.body.style, {
//         overflow: ''
//         // position: '',
//         // top: ''
//       })
//       // window.scrollTo(0, top)
//     }
//   })
// })()
