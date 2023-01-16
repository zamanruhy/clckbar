import Step from './Step'
import stepDecorOneImg from '../images/step-decor-one.svg?metadata'
import stepDecorTwoImg from '../images/step-decor-two.svg?metadata'
import stepDecorThreeImg from '../images/step-decor-three.svg?metadata'

import './Steps.css'

const items = [
  {
    title: `Загрузи видео <br>и фото в сторис`,
    text: `Просто сними видео или фото в формате рассказа о своих услугах или товарах.`,
    decor: stepDecorOneImg
  },
  {
    title: `Добавь нужные <br>способы связи`,
    text: `Кликбар соберет все ссылки <br class="max-sm:hidden">на одну страницу за пару кликов. `,
    decor: stepDecorTwoImg
  },
  {
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
          <h2 className="title steps__title">Как это работает?</h2>
          <div className="steps__stack">
            {items.map((item, i) => (
              <Step index={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
