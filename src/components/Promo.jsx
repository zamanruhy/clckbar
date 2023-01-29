import emojiImg from '../images/emoji-smiling-face-with-sunglasses.png?format=png;webp;avif&quality=80'
import manImg from '../images/man.png?format=png;webp;avif'
import PlayIcon from '../icons/play.svg?component'
import howImg from '../images/how.svg?metadata'
import Button from './Button'
import Image from './Image'
import './Promo.css'

export default function Promo() {
  return (
    <section class="promo">
      <div className="container">
        <div className="promo__content">
          <h2 className="promo__title title">
            <span class="text-pink">15 минут</span> — и ты настроишь рекламу как
            профи{' '}
            <Image
              class="promo__emoji"
              src={emojiImg}
              alt="😎"
              loading="lazy"
              decoding="async"
            />
          </h2>
          <div className="promo__plate">
            <div className="promo__plate-inner">
              <p className="promo__text">
                Просто повторяй за видео и скоро о тебе узнают много клиентов.
                Это несложно!
              </p>
              <Button
                class="promo__button"
                as="a"
                href="#"
                variant="tertiary"
                size="md"
              >
                <PlayIcon class="promo__button-icon" />
                Смотреть видео<span class="max-sm:hidden">-инструкцию</span>
              </Button>
              <Image
                class="promo__how"
                src={howImg}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
            <Image
              class="promo__img"
              src={manImg}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="promo__benefits">
            <div className="promo__benefit">
              {/* Адекватные расходы на&nbsp;продвижение */}
              Плати только за&nbsp;заявки с&nbsp;рекламой от&nbsp;Яндекса
            </div>
            <div className="promo__benefit">
              {/* Удобная форма заявки в&nbsp;1&nbsp;клик */}
              Адекватные расходы на&nbsp;продвижение
            </div>
            <div className="promo__benefit">
              {/* Фокус на главном, не&nbsp;теряются акценты */}
              Удобная форма заявки для&nbsp;клиентов в&nbsp;1&nbsp;клик
            </div>
            <div className="promo__benefit">
              {/* Молниеносная загрузка страницы */}
              Молниеносная загрузка страницы на&nbsp;смартфонах
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
