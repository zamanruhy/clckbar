import CaretIcon from '../icons/caret.svg?component'
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
          <a href="#" className="nav__link mr-[7px]">
            Инструменты
            <CaretIcon className="relative -top-px ml-[12px] h-[7px] fill-current" />
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Блог
          </a>
        </li>
      </ul>
    </nav>
  )
}
