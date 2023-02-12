import UpRightIcon from '../icons/up-right.svg?component'
import RightIcon from '../icons/right.svg?component'
import emojiImg from '../images/emoji-star-struck.png?format=png;webp;avif&quality=80'
import extraOneImg from '../images/extra-one.png?format=png;webp;avif&width=1184'
import extraTwoImg from '../images/extra-two.png?format=png;webp;avif&width=1184'
import Button from './Button'
import Image from './Image'
import './Extra.css'

// console.log('extraOneImg', extraOneImg)

export default function Extra() {
  return (
    <section class="extra">
      <div className="container">
        <h2 className="extra__title title">
          Сделай свой кликбар уникальным&nbsp;
          <Image
            className="extra__emoji"
            src={emojiImg}
            alt="🤩"
            loading="lazy"
            decoding="async"
          />
        </h2>
        <div className="extra__items">
          <a href="#" className="extra__item extra__item_one">
            <div className="extra__item-inner">
              <p className="extra__item-text">
                Твои фото и видео. Твои цвета и фон. Твоя ссылка. Твой кликбар.
                <br />
                <br />
                Такое – только у тебя.
              </p>
              <div className="extra__carousel">
                <Image
                  class="extra__carousel-img"
                  src={extraOneImg}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </a>

          <a href="#" className="extra__item extra__item_two">
            <div className="extra__item-inner">
              <p className="extra__item-text">
                Готовые шаблоны для твоей страницы.
                <br />
                <br />
                Выбери тот, который подчеркнет твой стиль.
              </p>
              <div className="extra__item-pointer">
                <UpRightIcon class="extra__item-icon" aria-hidden="true" />
              </div>
              <Image
                class="extra__item-img"
                src={extraTwoImg}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
          </a>
        </div>
        <Button
          class="extra__button"
          as="a"
          href="#"
          variant="primary"
          size="lg"
        >
          Все возможности
          <RightIcon class="extra__button-icon" aria-hidden="true" />
        </Button>
      </div>
    </section>
  )
}
