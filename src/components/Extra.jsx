import UpRightIcon from '../icons/up-right.svg?component'
import extraOneImg from '../images/extra-one.png?format=png;webp'
import './Extra.css'
import Image from './Image'

export default function Extra() {
  return (
    <section class="extra">
      <div className="container">
        <div className="extra__title title">Что еще может кликбар?</div>
        <div className="extra__items">
          <a href="#" className="extra__item bg-violet text-white">
            <div className="extra__item-text">
              Анализируй, <br />
              откуда поступают обращения и какой из каналов наиболее эффективен
            </div>
            <div className="extra__item-pointer">
              <UpRightIcon class="extra__item-icon" aria-hidden="true" />
            </div>
            <Image
              class="extra__item-img"
              src={extraOneImg}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </a>

          <a href="#" className="extra__item bg-lime text-body">
            <div className="extra__item-text">
              Готовые шаблоны для твоей страницы. Выбирай тот, который подойдет
              больше
            </div>
            <div className="extra__item-pointer">
              <UpRightIcon class="extra__item-icon" aria-hidden="true" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
