import { For, onMount } from 'solid-js'
import { animate, spring, timeline } from 'motion'
import Image from './Image'

import ShareIcon from '../icons/share.svg?component'
import LogoIcon from '../icons/logo-mini.svg?component'
import PhoneIcon from '../icons/phone.svg?component'
import TelegramIcon from '../icons/telegram.svg?component'
import WaIcon from '../icons/wa.svg?component'
import VkIcon from '../icons/vk.svg?component'
import SendIcon from '../icons/send.svg?component'
import CloseIcon from '../icons/close.svg?component'

import avaOne from '../images/motion-ava-one.jpg?format=jpg;webp;avif'
import storieOne from '../images/motion-storie-one.png?format=png;webp;avif'
import storieTwo from '../images/motion-storie-two.png?format=png;webp;avif'
import storieThree from '../images/motion-storie-three.png?format=png;webp;avif'

import './Anim.css'

function timelineProgress(controls, callback) {
  callback(controls.currentTime % controls.duration)

  if (controls.playState === 'running') {
    requestAnimationFrame(() => timelineProgress(controls, callback))
  }
}

function script() {
  const els = [...document.querySelectorAll('.anim')]
  if (!els.length) return

  els.forEach((el) => {
    const plateEls = el.querySelectorAll('.anim__ava-plate')
    const storyEl = el.querySelector('.anim__story')
    const storyVideoEl = el.querySelector('.anim__story-video')
    const storyFillEl = el.querySelector('.anim__story-bar-fill')
    const avaRingEl = el.querySelector('.anim__ava-ring')

    function wait(s) {
      return [document.createElement('b'), { scale: [0, 1] }, { duration: s }]
    }

    const tl = timeline(
      [
        [
          plateEls[0],
          { scale: [0, 1], x: ['-30em', '-169em'], y: ['-30em', '-10em'] },
          { easing: spring({ stiffness: 200, damping: 15 }), at: 0.2 }
        ],
        [
          plateEls[1],
          { scale: [0, 1], x: ['30em', '171em'], y: ['30em', '113em'] },
          {
            easing: spring({ stiffness: 200, damping: 15 }),
            at: '<',
            delay: 0.1
          }
        ],
        [
          plateEls[2],
          { scale: [0, 1], x: ['-30em', '-169em'], y: ['30em', '236em'] },
          {
            easing: spring({ stiffness: 200, damping: 15 }),
            at: '<',
            delay: 0.2
          }
        ],
        [
          avaRingEl,
          { scale: [1, 1.08, 0.8] },
          {
            easing: [
              [0, 0, 0.2, 1],
              [0, 0, 0.2, 1]
            ],
            // offset: [0, 0.6, 1],
            duration: 0.6,
            at: '<',
            delay: 0.1
          }
        ],
        wait(2),

        [
          plateEls[0],
          { scale: [1, 0], x: ['-169em', '-30em'], y: ['-10em', '-30em'] },
          { easing: [0.4, 0, 1, 1], duration: 0.5 }
        ],
        [
          plateEls[1],
          { scale: [1, 0], x: ['171em', '30em'], y: ['113em', '30em'] },
          {
            easing: [0.4, 0, 1, 1],
            duration: 0.2,
            at: '<',
            delay: 0.1
          }
        ],
        [
          plateEls[2],
          { scale: [1, 0], x: ['-169em', '-30em'], y: ['236em', '30em'] },
          {
            easing: [0.4, 0, 1, 1],
            duration: 0.2,
            at: '<',
            delay: 0.2
          }
        ],
        [
          avaRingEl,
          { scale: [0.8, 1] },
          {
            easing: spring({ stiffness: 200, damping: 10 }),
            at: '-0.1'
          }
        ],
        wait(0.5),

        [
          storyEl,
          { opacity: [0, 1], scale: [0.9, 1], y: ['5%', 0] },
          { duration: 0.2, easing: [0, 0, 0.2, 1] }
        ],
        [
          storyFillEl,
          { scaleX: [0, 0.7] },
          {
            duration: 5,
            get easing() {
              console.log('getter')
              return 'linear'
            }
          }
        ],
        [
          storyEl,
          { opacity: [1, 0], scale: [1, 0.9], y: [0, '5%'] },
          { duration: 0.2, easing: [0.4, 0, 1, 1] }
        ],
        wait(1)
      ],
      { repeat: Infinity }
    )

    timelineProgress(tl, (t) => {
      if (t > 1 && storyVideoEl.paused) {
        storyVideoEl.play()
      } else if (t < 0.1 && !storyVideoEl.paused) {
        storyVideoEl.pause()
        storyVideoEl.currentTime = 0
      }
    })

    el.addEventListener('click', () => tl.play())
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Anim() {
  onMount(script)
  return (
    <div class="anim" aria-hidden="true">
      <div className="anim__main">
        <div class="anim__ava">
          <div class="anim__ava-cnt">
            <div class="anim__ava-ring" />
            <Image
              class="anim__ava-img"
              src={avaOne}
              alt=""
              loading="lazy"
              decoding="async"
            />

            <Image
              class="anim__ava-plate"
              src={storieOne}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <Image
              class="anim__ava-plate"
              src={storieTwo}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <Image
              class="anim__ava-plate"
              src={storieThree}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="anim__ava-share">
            <ShareIcon />
          </div>
        </div>
        <div class="anim__about">
          <h1 class="anim__about-title">Анна Петрова</h1>
          <div class="anim__about-desc">
            <p>
              Кондитер г. Санкт–Петербург. <br />
              Пеку с любовью ❤️&#xFE0E; Рисунки на тортах, красивые коробки для
              десертов. <br />
              Заказывай для себя и близких 🙂 Актуальные цены в сторис. Кликай
              на фото
            </p>
          </div>
        </div>
      </div>
      <div className="anim__footer">
        <div className="anim__orders">
          <span className="anim__order anim__order_phone">
            <PhoneIcon />
            Заказать по телефону
          </span>
          <span className="anim__order anim__order_tm">
            <TelegramIcon />
            Заказать в Telegram
          </span>
          <span className="anim__order anim__order_wa">
            <WaIcon />
            Заказать в Whatsapp
          </span>
          <span className="anim__order anim__order_vk">
            <VkIcon />
            Заказать в VK
          </span>
        </div>
        {/* <div class="footer__request">
          <Request />
        </div> */}
        <span class="anim__footer-meta">
          <LogoIcon />
        </span>
      </div>

      <Story />
    </div>
  )
}

function Story() {
  return (
    <div class="anim__story">
      <video
        class="anim__story-video"
        src="static/video/race.mp4"
        muted
        preload
        playsinline
        disablepictureinpicture
      />

      <div class="anim__story-header">
        <div class="anim__story-bars">
          <div class="anim__story-bar">
            <span className="anim__story-bar-fill" />
          </div>
          <div class="anim__story-bar" />
          <div class="anim__story-bar" />
          <div class="anim__story-bar" />
        </div>
        <div class="anim__story-row">
          <div class="anim__story-user">
            <Image
              class="anim__story-ava"
              src={avaOne}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div class="anim__story-info">
              <h3 class="anim__story-username">a-petrova</h3>
              <time class="anim__story-time">4 ч.</time>
            </div>
          </div>
          <div class="anim__story-close">
            <CloseIcon />
          </div>
        </div>
      </div>

      <div class="anim__story-button">
        Оставить заявку <SendIcon />
      </div>
    </div>
  )
}
