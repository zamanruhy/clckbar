import CaretDownIcon from '../icons/caret-down.svg?component'
import Button from './Button'
import './Nav.css'

export default function Nav(props) {
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
        <li className="nav__item">
          <a href="#" className="nav__link mr-[6px]">
            Инструменты
            <CaretDownIcon className="relative -top-px mr-[-6px] ml-[6px] h-[24px] fill-current" />
          </a>
          {/* <ul className="nav__menu">
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
          </ul> */}
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
