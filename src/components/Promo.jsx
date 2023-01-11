import emojiImg from '../images/emoji-thumb-up.png?format=png;webp'
import manImg from '../images/man.png?format=png;webp'
import PlayIcon from '../icons/play.svg?component'
import HowIcon from '../icons/how.svg?component'
import Button from './Button'
import Image from './Image'
import './Promo.css'

export default function Promo() {
  return (
    <section class="promo">
      <div className="container">
        <div className="promo__content">
          <h2 className="promo__title title">
            Страницу кликбар проще продвигать{' '}
            <Image
              class="promo__emoji"
              src={emojiImg}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </h2>
          <div className="promo__plate">
            <div className="promo__plate-inner">
              <p className="promo__text">
                Узнай, как бюджетно и просто настроить рекламу на кликбар
              </p>
              <Button
                class="promo__button"
                as="a"
                href="#"
                variant="tertiary"
                size="md"
              >
                <PlayIcon class="promo__button-icon" />
                Смотреть видео
              </Button>
              <HowIcon class="promo__how" />
            </div>
            <Image
              class="promo__img"
              src={manImg}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
