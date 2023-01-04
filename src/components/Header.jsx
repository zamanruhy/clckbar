import Hamburger from './Hamburger'
import './Header.css'
import Logo from './Logo'
import Nav from './Nav'

export default function Header() {
  return (
    <header class="header">
      <div class="container">
        <div className="header__inner">
          <Logo className="header__logo" />
          <Nav />
          <a href="#" className="header__auth">
            <span className="header__auth-text">Войти</span>
            <span className="header__auth-badge">Free</span>
          </a>
          <Hamburger />
        </div>
      </div>
    </header>
  )
}
