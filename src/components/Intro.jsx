import { createEffect, createMemo, createSignal, onMount } from 'solid-js'
import { windowLoaded } from '@/utils'
// import emojiImg from '../images/emoji.png?format=png;webp;avif&quality=100'
// import emojisImg from '../images/emoji-star-struck.jpg?format=jpg;webp;avif&quality=100'
import emojiImg from '../images/emoji-star-struck.png?format=png;webp;avif&quality=80'
// import catImg from '../images/cat.png?format=png;webp'
// import previewImg from '../images/preview.png?format=png;webp;avif'
import phoneImg from '../images/phone.png?format=png;webp;avif&width=700;1022'
import spotImg from '../images/blurry-spot-one.svg?metadata'
import UpCircleIcon from '../icons/up-circle.svg?component'
import UpRightIcon from '../icons/up-right.svg?component'
import hookImg from '../images/hook.svg?datauri&metadata'

// import catGifImg from '../images/cat.gif'

import Image from './Image'
import Button from './Button'
import { navOpen } from '@/store'

import './Intro.css'

const sentences = [
  ['Получай', 'больше клиентов·'],
  ['Начни', 'своё дело·'],
  ['Привлекай', 'новых подписчиков·'],
  ['Бюджетно', 'тестируй идеи·']
]

const upCircleIcon = (
  <UpCircleIcon className="intro__pointer" aria-hidden="true" />
)

const upCircleIconHTML = upCircleIcon?.outerHTML

function format(str) {
  return str.replace('·', upCircleIconHTML)
}

function script() {
  const el = document.querySelector('.intro')
  if (!el) return

  let sentsIndex = 0
  let length = sentences[sentsIndex].join('').length
  let dir = -1
  let timer

  const phraseEls = [...el.querySelectorAll('.intro__phrase')]
  const linesEl = el.querySelector('.intro__title-lines')
  const [inited, setInited] = createSignal(false)
  const [intersected, setIntersected] = createSignal(true)
  const [docVisible, setDocVisible] = createSignal(true)
  const [firstPrase, setFirstPrase] = createSignal(sentences[0][0])
  const [secondPrase, setSecondPrase] = createSignal(sentences[0][1])
  const playing = createMemo(
    () => inited() && intersected() && docVisible() && !navOpen()
  )

  function update() {
    length += dir
    let interval = dir > 0 ? 60 : 30
    const phrases = sentences[sentsIndex]
    const sentence = phrases.join('')

    setFirstPrase(phrases[0].slice(0, length))
    setSecondPrase(phrases[1].slice(0, Math.max(length - phrases[0].length, 0)))

    if (length === sentence.length) {
      dir = -1
      interval = 1000
    } else if (length === 0) {
      sentsIndex = (sentsIndex + 1) % sentences.length
      dir = 1
      interval = 300
    }

    // console.log(
    //   'navigator.scheduling.isInputPending()',
    //   navigator.scheduling.isInputPending()
    // )

    timer = setTimeout(update, interval)
  }

  createEffect(() => {
    phraseEls[0].innerHTML = firstPrase()
  })

  createEffect(() => {
    phraseEls[1].innerHTML = format(secondPrase())
  })

  createEffect(() => {
    if (playing()) update()
    else clearTimeout(timer)
  })

  // el.addEventListener('click', () => setInited(!inited()))

  windowLoaded(() => setTimeout(setInited, 2000, true))

  new IntersectionObserver(([entry]) => {
    setIntersected(entry.isIntersecting)
  }).observe(linesEl)

  document.addEventListener('visibilitychange', () => {
    setDocVisible(document.visibilityState === 'visible')
  })

  // const phoneImgEl = el.querySelector('.intro__phone-img')
  // imageLoaded(phoneImgEl).then(() => {
  //   el.querySelector('.intro__phone-content').classList.remove('invisible')
  // })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Intro() {
  onMount(script)
  return (
    <section class="intro">
      <div className="container">
        <div className="intro__inner">
          <div className="intro__main">
            <h1 className="intro__title">
              <div className="intro__title-lines">
                <div className="intro__title-line">
                  <span className="intro__phrase-wrap">
                    <Image
                      className="intro__emoji"
                      src={emojiImg}
                      alt="🤩"
                      fetchpriority="high"
                      draggable="false"
                    />
                    <span className="intro__phrase">{sentences[0][0]}</span>
                  </span>
                </div>
                <div className="intro__title-line text-pink">
                  <span className="intro__phrase">
                    {sentences[0][1].replace('·', '')}
                    {upCircleIcon}
                  </span>
                </div>
              </div>
              <div className="intro__title-line">
                с живой
                <picture>
                  <source srcset="static/img/cat.webp" type="image/webp" />
                  <img
                    className="intro__decor"
                    src="static/img/cat.gif"
                    width="144"
                    height="144"
                    alt=""
                    fetchpriority="high"
                    draggable="false"
                  />
                </picture>
                страницей
              </div>
              <div className="intro__title-line">
                кликбар <span class="text-pink">уже сегодня</span>
              </div>
              <Image
                className="intro__hook"
                src={hookImg}
                alt=""
                draggable="false"
              />
            </h1>
            <p className="intro__text">
              Создай страницу кликбар, настрой рекламу по нашему гайду и собирай
              заявки от клиентов с помощью всего одной ссылки.
            </p>
            <div className="intro__action">
              <Button
                class="intro__button"
                as="a"
                href="#"
                variant="secondary"
                size="md"
              >
                Создать кликбар
                <UpRightIcon class="intro__button-icon" aria-hidden="true" />
                <span className="intro__badge">7 дней доступа</span>
              </Button>
            </div>
          </div>
          <div className="intro__phone">
            {/* <div className="intro__phone-top" /> */}
            <Image
              className="intro__phone-img"
              src={phoneImg}
              alt=""
              sizes="100vw md:50vw"
              fetchpriority="high"
              draggable="false"
            />
            {/* <div className="intro__phone-content"> */}
            {/* <Image
                className="intro__phone-media"
                src={previewImg}
                alt=""
                fetchpriority="high"
              /> */}

            <video
              className="intro__phone-media"
              src="static/video/intro.mp4"
              playsinline
              muted
              autoplay
              disablepictureinpicture
              // controls
              loop
            />
            {/* </div> */}
          </div>
          <div className="intro__spot">
            <Image
              class="intro__spot-img"
              src={spotImg}
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
