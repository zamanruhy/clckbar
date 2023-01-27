import Step from './Step'
import stepDecorOneImg from '../images/step-decor-one.svg?metadata'
import stepDecorTwoImg from '../images/step-decor-two.svg?metadata'
import stepDecorThreeImg from '../images/step-decor-three.svg?metadata'
import spotTwoImg from '../images/blurry-spot-two.svg?metadata'
import spotThreeImg from '../images/blurry-spot-three.svg?metadata'

import './Steps.css'

const items = [
  {
    mod: 'one',
    title_: `Загрузи видео <br>и фото в сторис`,
    title: `Загрузи видео и фото <br>в сторис кликбара`,
    text: `Просто сними видео или фото в формате рассказа о своих услугах или товарах.`,
    decor: stepDecorOneImg,
    spot: spotTwoImg
  },
  {
    mod: 'two',
    title: `Добавь нужные <br>способы связи`,
    text: `Кликбар соберет все ссылки <br class="max-sm:hidden">на одну страницу за пару кликов. `,
    decor: stepDecorTwoImg,
    spot: spotThreeImg
  },
  {
    mod: 'three',
    title: `Или добавь <br>форму для заявок`,
    text: `Заявки от клиентов будут приходить <br class="max-sm:hidden">тебе на почту или в телеграм.`,
    decor: stepDecorThreeImg
  }
]

export default function Steps() {
  return (
    <section class="steps">
      <div className="container">
        <div className="steps__inner">
          <h2 className="title steps__title">
            Создать кликбар – проще простого
          </h2>
          <div className="steps__stack">
            {items.map((item, i) => (
              <Step index={i} {...item} />
            ))}
          </div>
          {/* <svg class="steps__bg">
            <defs>
              <filter
                id="steps-bg-blur"
                width="200%"
                height="200%"
                x="-50%"
                y="-50%"
              >
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="122"
                ></feGaussianBlur>
              </filter>
            </defs>
            <circle
              cx="50%"
              cy="50%"
              r="50%"
              filter="url(#steps-bg-blur)"
            ></circle>
          </svg> */}
        </div>
      </div>
    </section>
  )
}
