import { createEffect, createSignal, onCleanup, onMount } from 'solid-js'
import { render } from 'solid-js/web'
import { navOpen, setNavOpen } from '@/store'
import Hamburger from './Hamburger'
import Logo from './Logo'
import Nav from './Nav'
import Drawer from './Drawer'
import Button from './Button'
import useMediaQuery from '@/hooks/use-media-query'

import './Header.css'

function script() {
  const el = document.querySelector('.header')
  if (!el) return
  const navEl = el.querySelector('.nav')
  const commentNode = document.createComment('.nav')
  const mobile = useMediaQuery('not all and (min-width: 992px)')
  const [slotEl, setSlotEl] = createSignal(null)

  navEl.classList.remove('max-lg:hidden')

  createEffect(() => {
    if (mobile()) {
      navEl.replaceWith(commentNode)
      setSlotEl(navEl)
    } else {
      commentNode.replaceWith(navEl)
      setSlotEl(null)
    }
  })

  createEffect(() => {
    if (navOpen()) {
      document.documentElement.style.scrollBehavior = 'auto'
      document.documentElement.getBoundingClientRect()
      window.scrollTo(0, 0)
      document.documentElement.style.scrollBehavior = ''
    }
  })

  if (!import.meta.env.SSR) {
    render(() => {
      return (
        <>
          {mobile() && (
            <Drawer open={navOpen()} onRequestClose={() => setNavOpen(false)}>
              {slotEl()}
            </Drawer>
          )}
        </>
      )
    }, el)
  }
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Header() {
  onMount(script)

  return (
    <header class="header">
      <div class="container">
        <div className="header__inner">
          <Logo className="header__logo" />

          <Nav className="max-lg:hidden" />

          <Button as="a" href="#" variant="primary" class="header__auth">
            Войти
            <span className="header__auth-badge">Free</span>
          </Button>

          <Hamburger />
        </div>
      </div>
    </header>
  )
}
