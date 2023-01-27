import { onMount } from 'solid-js'
import Client from './Client'
import clientAva1 from '../images/client-ava-1.png?format=png;webp;avif'
import clientAva2 from '../images/client-ava-2.png?format=png;webp;avif'
import clientAva3 from '../images/client-ava-3.png?format=png;webp;avif'
import clientAva4 from '../images/client-ava-4.png?format=png;webp;avif'
import LeftIcon from '../icons/left.svg?component'
import RightIcon from '../icons/right.svg?component'
import Image from './Image'
import Button from './Button'
import EmblaCarousel from 'embla-carousel'

import './Clients.css'

const items = [
  {
    mod: 'master',
    name: `Фрилансерам <br>и мастерам`,
    desc: `Чтобы заниматься своим любимым делом и зарабатывать деньги, а не отвлекаться на маркетинг и сайт.`
  },
  {
    mod: 'owner',
    name: `Владельцам <br>бизнеса <br>и маркетологам`,
    desc: `Привлекай клиентов
    не только по сарафану,
    но и через рекламу
    без больших вложений
    и подготовки.`
  },
  {
    mod: 'shop',
    name: `Небольшим <br>интернет–магазинам`,
    desc: `Получи больше
    потенциальных покупателей
    при минимальных тратах
    на рекламу.`
  }
]

const avas = [clientAva1, clientAva2, clientAva3, clientAva4]

function script() {
  const el = document.querySelector('.clients')
  if (!el) return

  const sliderEl = el.querySelector('.clients__viewport')
  const prevEl = el.querySelector('.clients__prev')
  const nextEl = el.querySelector('.clients__next')

  const embla = EmblaCarousel(sliderEl, {
    loop: false,
    containScroll: 'trimSnaps',
    align: 'center',
    slidesToScroll: 1,
    speed: 15,
    breakpoints: {
      '(min-width: 768px)': { startIndex: 1, containScroll: '' }
    }
  })

  function update() {
    prevEl.disabled = !embla.canScrollPrev()
    nextEl.disabled = !embla.canScrollNext()
  }

  embla.on('select', update)
  embla.on('init', update)
  embla.on('reInit', update)

  prevEl.addEventListener('click', () => embla.scrollPrev())
  nextEl.addEventListener('click', () => embla.scrollNext())
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Clients() {
  onMount(script)
  return (
    <section class="clients">
      <div className="container">
        <div className="clients__head">
          <h2 className="clients__title title">Кто пользуется кликбаром</h2>
          <ul className="clients__avas">
            {avas.map((src) => (
              <li class="clients__ava">
                <Image
                  class="clients__ava-img"
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="clients__content">
        <Button
          class="clients__prev"
          variant="primary"
          type="button"
          aria-label="Предыдущий слайд"
        >
          <LeftIcon aria-hidden="true" />
        </Button>
        <Button
          class="clients__next"
          variant="primary"
          type="button"
          aria-label="Следующий слайд"
        >
          <RightIcon aria-hidden="true" />
        </Button>
        <div className="clients__viewport">
          <div className="clients__wrapper">
            {items.map((item) => (
              <div className="clients__item">
                <Client {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
