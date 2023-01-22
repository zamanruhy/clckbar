import UpRightIcon from '../icons/up-right.svg?component'
import RightIcon from '../icons/right.svg?component'
import extraOneImg from '../images/extra-one.png?format=png;webp;avif&width=600;1184'
import extraTwoImg from '../images/extra-two.png?format=png;webp;avif&width=600;1184'
import Button from './Button'
import Image from './Image'
import './Extra.css'

export default function Extra() {
  return (
    <section class="extra">
      <div className="container">
        <h2 className="extra__title title">Что еще может кликбар?</h2>
        <div className="extra__items">
          <a href="#" className="extra__item extra__item_one">
            <p className="extra__item-text">
              Анализируй, <br />
              откуда поступают обращения и какой из каналов наиболее эффективен
            </p>
            <div className="extra__item-pointer">
              <UpRightIcon class="extra__item-icon" aria-hidden="true" />
            </div>
            <Image
              class="extra__item-img"
              src={extraOneImg}
              alt=""
              sizes="100vw sm:50vw"
              loading="lazy"
              decoding="async"
            />
          </a>

          <a href="#" className="extra__item extra__item_two">
            <p className="extra__item-text">
              Готовые шаблоны для твоей страницы. Выбирай тот, который подойдет
              больше
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
