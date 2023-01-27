import lightningImg from '../images/lightning.png?format=png;webp;avif'
import bagImg from '../images/bag.png?format=png;webp;avif'
import rocketImg from '../images/rocket.png?format=png;webp;avif'
import Image from './Image'
import wowImg from '../images/wow.svg?metadata'

import './Facts.css'

const items = [
  {
    num: 10,
    unit: 'мин',
    text: `чтобы собрать <br>кликбар`,
    src: lightningImg
  },
  {
    num: 1,
    unit: 'час',
    text: `чтобы все запустить <br>вместе с рекламой`,
    src: rocketImg
  },
  {
    num: 7,
    unit: 'дней',
    text: `бесплатно <br>полная версия`,
    src: bagImg
  }
]

export default function Facts() {
  return (
    <section class="facts">
      <div className="container">
        <div className="facts__inner">
          <h2 className="title facts__title">Вместо сайта и лендинга</h2>
          <p className="facts__text">
            Не нужен большой сайт, чтобы рассказать о себе и своих услугах.{' '}
            <br class="max-sm:hidden" /> Страница, куда приводить клиентов,
            готова за 10 минут.
          </p>
          <Image
            class="facts__decor"
            src={wowImg}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <div className="facts__grid">
            {items.map(({ num, unit, text, src }) => (
              <article class="facts__item">
                <div className="facts__item-info">
                  <h3 className="facts__item-title">
                    <span className="facts__item-num">{num}</span>
                    <span className="facts__item-unit">{unit}</span>
                  </h3>
                  <p className="facts__item-text" innerHTML={text} />
                </div>
                <div className="facts__item-pic">
                  <Image
                    class="facts__item-img"
                    src={src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
