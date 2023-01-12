import emojiImg from '../images/emoji-party.png?format=png;webp'
import catDecorImg from '../images/cat-decor.png?format=png;webp'
import bgImg from '../images/footer-bg.jpg?format=png;webp'

import RaysIcon from '../icons/rays.svg?component'
import KIcon from '../icons/k.svg?component'
import Rectanglescon from '../icons/rectangles.svg?component'
import LogoIcon from '../icons/logo-mini.svg?component'

import Button from './Button'
import Image from './Image'

import './Footer.css'
import Social from './Social'

export default function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div className="footer__inner">
          <div className="footer__top">
            <h3 className="footer__title">
              <Image
                className="footer__emoji"
                src={emojiImg}
                alt=""
                loading="lazy"
                decoding="async"
              />
              <br />
              Создай <br />
              страницу кликбар
            </h3>
            <Button
              class="footer__button"
              as="a"
              href="#"
              variant="primary"
              size="md"
            >
              <RaysIcon class="footer__button-icon" aria-hidden="true" />
              Начни сейчас
            </Button>
            <p className="footer__text">
              7-дневный бесплатный период. <br />
              Без ввода банковской карты.
            </p>
            <Rectanglescon className="footer__rectangles" />
            <div className="footer__k">
              <KIcon class="footer__k-icon" aria-hidden="true" />
            </div>
            <Image
              class="footer__decor"
              src={catDecorImg}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="footer__content">
            <div className="footer__cols">
              <div className="footer__col">
                <h4 className="footer__legend">Продукт</h4>
                <ul className="footer__list">
                  <li className="footer__list-item">
                    <a href="#" className="footer__list-link">
                      Создать Кликбар
                    </a>
                  </li>
                  <li className="footer__list-item">
                    <a href="#" className="footer__list-link">
                      Тарифы
                    </a>
                  </li>
                  <li className="footer__list-item">
                    <a href="#" className="footer__list-link">
                      Как продвигать
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__col">
                <h4 className="footer__legend">Сервисы</h4>
                <ul className="footer__list">
                  <li className="footer__list-item">
                    <a href="#" className="footer__list-link">
                      Реклама TG каналов
                    </a>
                  </li>
                  <li className="footer__list-item">
                    <a href="#" className="footer__list-link">
                      Подарки за подписку на TG
                    </a>
                  </li>
                  <li className="footer__list-item">
                    <a href="#" className="footer__list-link">
                      Сократить ссылку
                    </a>
                  </li>
                  <li className="footer__list-item">
                    <a href="#" className="footer__list-link">
                      Сделать ссылку WhatsApp
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__col">
                <h4 className="footer__legend">Почему</h4>
                <ul className="footer__list">
                  <li className="footer__list-item">
                    <a href="#" className="footer__list-link">
                      Кликбар vs Обычный сайт
                    </a>
                  </li>
                  <li className="footer__list-item">
                    <a href="#" className="footer__list-link">
                      Кликбар vs Вконтакте
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__col">
                <Social />
              </div>
            </div>
            <div className="footer__meta">
              <div className="footer__policy">
                © 2021-2022 ИП Стрекалов А.Д.
                <a href="https://clck.bar/rules" target="_blank">
                  Условия пользования
                </a>
              </div>
              <div className="footer__dev">
                <a href="https://dev.clck.bar" target="_blank">
                  Разработка
                </a>
                <a href="https://dev.clck.bar" target="_blank">
                  Дизайн
                </a>
              </div>
            </div>
          </div>

          <div className="footer__btm">
            <Image
              class="footer__btm-img"
              src={bgImg}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div className="footer__btm-badge">
              <LogoIcon class="footer__btm-logo" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
