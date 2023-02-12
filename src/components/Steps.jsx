import Step from './Step'
import stepDecorOneImg from '../images/step-decor-one.svg?metadata'
import stepDecorTwoImg from '../images/step-decor-two.svg?metadata'
import stepDecorThreeImg from '../images/step-decor-three.svg?metadata'
import spotTwoImg from '../images/blurry-spot-two.svg?metadata'
import spotThreeImg from '../images/blurry-spot-three.svg?metadata'

// import Anim from './Anim'

import './Steps.css'

const items = [
  {
    mod: 'one',
    title: `Загрузи видео и фото <br>в сторис кликбара`,
    text: `Просто сними видео или фото в формате рассказа о своих услугах или товарах.`,
    decor: stepDecorOneImg,
    spot: spotTwoImg,
    src: 'static/video/step-one.mp4'
  },
  {
    mod: 'two',
    title: `Добавь нужные <br>способы связи`,
    text: `Кликбар соберет все ссылки <br class="max-sm:hidden">на одну страницу за пару кликов. `,
    decor: stepDecorTwoImg,
    spot: spotThreeImg,
    src: 'static/video/step-two.mp4'
  },
  {
    mod: 'three',
    title: `Или добавь <br>форму для заявок`,
    text: `Заявки от клиентов будут приходить <br class="max-sm:hidden">тебе на почту или в телеграм.`,
    decor: stepDecorThreeImg,
    src: 'static/video/step-three.mp4'
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
              <Step
                index={i}
                {...item}
                slot={
                  <video
                    src={item.src}
                    autoplay
                    muted
                    playsinline
                    loop
                    disablepictureinpicture
                  ></video>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
