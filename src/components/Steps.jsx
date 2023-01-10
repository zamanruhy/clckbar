import Step from './Step'
import StepDecorOneIcon from '../icons/step-decor-one.svg?component'
import StepDecorTwoIcon from '../icons/step-decor-two.svg?component'
import StepDecorThreeIcon from '../icons/step-decor-three.svg?component'

import './Steps.css'

const items = [
  {
    title: `Загрузи видео <br>и фото в сторис`,
    text: `Просто сними видео или фото в формате рассказа о своих услугах или товарах.`,
    Decor: StepDecorOneIcon
  },
  {
    title: `Добавь нужные <br>способы связи`,
    text: `Кликбар соберет все ссылки <br class="max-sm:hidden">на одну страницу за пару кликов. `,
    Decor: StepDecorTwoIcon
  },
  {
    title: `Или добавь <br>форму для заявок`,
    text: `Заявки от клиентов будут приходить <br class="max-sm:hidden">тебе на почту или в телеграм.`,
    Decor: StepDecorThreeIcon
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
