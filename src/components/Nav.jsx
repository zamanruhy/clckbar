import { createEffect, createSignal, onMount } from 'solid-js'
import CaretDownIcon from '../icons/caret-down.svg?component'
import Button from './Button'
import './Nav.css'

function script() {
  const el = document.querySelector('.nav')
  if (!el) return

  const itemEls = [...el.querySelectorAll('.nav__item_has-menu')]

  itemEls.forEach((itemEl) => {
    const linkEl = itemEl.querySelector('.nav__link')
    const menuEl = itemEl.querySelector('.nav__menu')
    const [open, setOpen] = createSignal(false)

    function onOutsideClick(e) {
      if (!menuEl.contains(e.target) && !linkEl.contains(e.target)) {
        setOpen(false)
      }
    }

    createEffect(() => {
      if (open()) {
        itemEl.classList.add('nav__item_open')
        window.addEventListener('click', onOutsideClick)
      } else {
        itemEl.classList.remove('nav__item_open')
        window.removeEventListener('click', onOutsideClick)
      }
    })

    linkEl.addEventListener('click', (e) => {
      e.preventDefault()
      setOpen(!open())
    })
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Nav(props) {
  onMount(script)
  return (
    <nav
      className="nav"
      classList={{ [props.className]: Boolean(props.className) }}
      aria-label="Основная"
    >
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Все возможности
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Тарифы
          </a>
        </li>
        <li className="nav__item nav__item_has-menu">
          <a href="#" className="nav__link">
            Инструменты
            <CaretDownIcon className="nav__caret" aria-hidden="true" />
          </a>
          <div className="nav__menu">
            <ul className="nav__menu-list">
              <li className="nav__menu-item">
                <a href="#" className="nav__menu-link">
                  Реклама Telegram-каналов в Яндекс Директ
                </a>
              </li>
              <li className="nav__menu-item">
                <a href="#" className="nav__menu-link">
                  Подарок за подписку на Telegram-канал
                </a>
              </li>
              <li className="nav__menu-item">
                <a href="#" className="nav__menu-link">
                  Сократить ссылку
                </a>
              </li>
              <li className="nav__menu-item">
                <a href="#" className="nav__menu-link">
                  Сделать ссылку на WhatsApp
                </a>
              </li>
              <li className="nav__menu-item">
                <a href="#" className="nav__menu-link">
                  Сделать ссылку на Instagram
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Блог
          </a>
        </li>
      </ul>
      <Button class="nav__button" as="a" href="#" variant="secondary" size="sm">
        Создать страницу
        <span className="nav__button-badge">Free</span>
      </Button>
    </nav>
  )
}
