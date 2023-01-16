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
