import { navOpen, setNavOpen } from '@/store'
import { createEffect, onMount, splitProps } from 'solid-js'
import './Hamburger.css'

function script() {
  const hamburgerEl = document.querySelector('.hamburger')
  if (!hamburgerEl) return

  hamburgerEl.addEventListener('click', () => setNavOpen(!navOpen()))

  createEffect(() => {
    hamburgerEl.classList.toggle('hamburger_active', navOpen())
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Hamburger(props) {
  onMount(script)
  const [, rest] = splitProps(props, ['active', 'class', 'classList'])
  return (
    <button
      class="hamburger"
      classList={{
        [props.class]: Boolean(props.class),
        ...props.classList
      }}
      type="button"
      aria-label="Переключить навигацию"
      {...rest}
    >
      <span class="hamburger__bar" />
      <span class="hamburger__bar" />
    </button>
  )
}
