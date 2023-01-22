import { createEffect, createMemo, createSignal, onMount } from 'solid-js'
import { imageLoaded, windowLoaded } from '@/utils'
import emojiImg from '../images/emoji.png?format=png;webp;avif'
// import catImg from '../images/cat.png?format=png;webp'
import previewImg from '../images/preview.png?format=png;webp;avif'
import phoneImg from '../images/phone.png?format=png;webp;avif&width=700;1022'
import UpCircleIcon from '../icons/up-circle.svg?component'
import UpRightIcon from '../icons/up-right.svg?component'
import hookImg from '../images/hook.svg?datauri&metadata'

// import catGifImg from '../images/cat.gif'

import Image from './Image'
import Button from './Button'

import './Intro.css'

const sentences = [
  ['Получай', 'больше клиентов'],
  ['Начни', 'своё дело'],
  ['Привлекай', 'новых подписчиков'],
  ['Бюджетно', 'тестируй идеи']
]

function script() {
  const el = document.querySelector('.intro')
  if (!el) return

  let sentsIndex = 0
  let length = sentences[sentsIndex].join('').length
  let dir = -1
  let resolve = null
  let suspended = null

  const phraseEls = [...el.querySelectorAll('.intro__phrase')]
  const linesEl = el.querySelector('.intro__title-lines')
  const [intersected, setIntersected] = createSignal(true)
  const [docVisible, setDocVisible] = createSignal(true)
  const playing = createMemo(() => docVisible() && intersected())

  // let lastTime = Date.now()

  async function update() {
    if (suspended) await suspended

    length += dir
    let interval = dir > 0 ? 70 : 30
    const phrases = sentences[sentsIndex]
    const sentence = phrases.join('')

    phraseEls[0].textContent = phrases[0].slice(0, length)
    phraseEls[1].textContent = phrases[1].slice(
      0,
      Math.max(length - phrases[0].length, 0)
    )

    if (length === sentence.length) {
      dir = -1
      interval = 1000
    } else if (length === 0) {
      sentsIndex = (sentsIndex + 1) % sentences.length
      dir = 1
      interval = 300
    }
    // console.log(Date.now() - lastTime)
    // lastTime = Date.now()
    setTimeout(update, interval)
  }

  windowLoaded().then(() => setTimeout(update, 2000))

  function play() {
    if (suspended) {
      resolve()
      suspended = null
    }
  }
  function pause() {
    if (!suspended) {
      suspended = new Promise((res) => (resolve = res))
    }
  }

  createEffect(() => {
    if (playing()) {
      // console.log('play')
      play()
    } else {
      // console.log('pause')
      pause()
    }
  })

  new IntersectionObserver(([entry]) => {
    setIntersected(entry.isIntersecting)
  }).observe(linesEl)

  document.addEventListener('visibilitychange', () => {
    setDocVisible(document.visibilityState === 'visible')
  })

  const phoneImgEl = el.querySelector('.intro__phone-img')
  imageLoaded(phoneImgEl).then(() => {
    el.querySelector('.intro__phone-content').classList.remove('invisible')
  })
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
                  <Image
                    className="intro__emoji"
                    src={emojiImg}
                    alt=""
                    fetchpriority="high"
                  />{' '}
                  <span className="intro__phrase">{sentences[0][0]}</span>
                </div>
                <div className="intro__title-line text-pink">
                  <span className="intro__phrase">{sentences[0][1]}</span>{' '}
                  <UpCircleIcon className="intro__pointer" aria-hidden="true" />
                </div>
              </div>
              <div className="intro__title-line">
                с живой
                <picture>
                  <source srcset="static/img/cat.avif" type="image/avif" />
                  <source srcset="static/img/cat.webp" type="image/webp" />
                  <img
                    className="intro__decor"
                    src="static/img/cat.gif"
                    width="144"
                    height="144"
                    alt=""
                    fetchpriority="high"
                  />
                </picture>
                {/* <video
                  className="intro__decor"
                  width="144"
                  height="144"
                  src="static/video/cat.mp4"
                  // src="data:video/mp4;base64,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"
                  autoplay
                  preload
                  muted
                  loop
                  playsinline
                  disablepictureinpicture
                  aria-hidden="true"
                /> */}
                страницей
              </div>
              <div className="intro__title-line">
                кликбар <span class="text-pink">уже сегодня</span>
              </div>
              <Image className="intro__hook" src={hookImg} alt="" />
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
            <div className="intro__phone-content invisible">
              <Image
                className="intro__phone-media"
                src={previewImg}
                alt=""
                fetchpriority="high"
              />
            </div>
          </div>
          <svg class="intro__bg">
            <defs>
              <filter
                id="intro-bg-blur"
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
              filter="url(#intro-bg-blur)"
            ></circle>
          </svg>
        </div>
      </div>
    </section>
  )
}
