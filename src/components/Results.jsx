import resultAva1 from '../images/result-ava-1.png?format=png;webp;avif'
import resultAva2 from '../images/result-ava-2.png?format=png;webp;avif'
import Result from './Result'

import './Results.css'

const items = [
  {
    title: `Получили конверсию 8.67%`,
    text: `С помощью страницы кликбар
  получили конверсию 8.67% и лидов
  всего за 1 000 ₽`,
    nickname: `Led Light`,
    src: resultAva1
  },
  {
    title: `+ 500 подписчиков по 67 ₽`,
    text: `Получили 500 подписчиков по 67 рублей в ТГ-канал через таргет в ВК`,
    nickname: `Annikov`,
    src: resultAva2
  }
]

export default function Results() {
  return (
    <section class="results">
      <div className="container">
        <h2 className="results__title title">
          Результаты пользователей на деле
        </h2>
        <div className="results__grid">
          {items.map((item) => (
            <Result {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
