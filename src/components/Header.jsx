import { createEffect, createSignal, onCleanup, onMount } from 'solid-js'
import { render } from 'solid-js/web'
import { navOpen, setNavOpen } from '@/store'
import Hamburger from './Hamburger'
import Logo from './Logo'
import Nav from './Nav'
import Drawer from './Drawer'
import './Header.css'
import useMediaQuery from '@/hooks/use-media-query'

function script() {
  const el = document.querySelector('.header')
  if (!el) return
  const navEl = el.querySelector('.header__nav')
  const commentNode = document.createComment('.nav')
  const mobile = useMediaQuery('not all and (min-width: 992px)')

  navEl.classList.remove('max-lg:hidden')

  createEffect(() => {
    if (mobile()) {
      navEl.replaceWith(commentNode)
    } else {
      commentNode.replaceWith(navEl)
    }
  })

  if (import.meta.env.PROD && !import.meta.env.SSR) {
    render(() => {
      return (
        <>
          {mobile() && (
            <Drawer open={navOpen()} onRequestClose={() => setNavOpen(false)}>
              {navEl}
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
          <Nav className="header__nav max-lg:hidden" />
          <a href="#" className="header__auth">
            <span className="header__auth-text">Войти</span>
            <span className="header__auth-badge">Free</span>
          </a>
          <Hamburger />
        </div>
      </div>

      {/* <div>
        {mobile() && (
          <Drawer open={navOpen()} onRequestClose={() => setNavOpen(false)}>
            {navEl()}
          </Drawer>
        )}
      </div> */}
    </header>
  )
}
