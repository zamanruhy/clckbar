import womenImg from '../images/women.png?format=png;webp'
import skateImg from '../images/skateboarder.png?format=png;webp'
import emojiWomenImg from '../images/emoji-women.png?format=png;webp'
import EasyIcon from '../icons/easy.svg?component'
import UpRightIcon from '../icons/up-right.svg?component'
import Image from './Image'
import Button from './Button'
import './Appeal.css'

export default function Appeal() {
  return (
    <section class="appeal">
      <div className="container">
        <div className="appeal__inner">
          <div className="appeal__main">
            <h2 className="appeal__title">
              Тебе уже пишут{' '}
              <Image
                class="relative top-[-0.2em] inline w-[1em]"
                src={emojiWomenImg}
                alt=""
                loading="lazy"
                decoding="async"
              />{' '}
              клиенты, пока другие делают себе сайты
            </h2>
            <p className="appeal__text">
              Не нужно тратить время и деньги на разработку большого сайта,
              чтобы начать привлекать клиентов и получать заявки.
            </p>
            <div className="appeal__decor">
              <EasyIcon class="appeal__decor-svg" aria-hidden="true" />
              <Image
                class="appeal__decor-img"
                src={skateImg}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="appeal__action">
              <Button
                class="appeal__button"
                as="a"
                href="#"
                variant="primary"
                size="md"
              >
                Создать страницу
                <UpRightIcon class="appeal__button-icon" aria-hidden="true" />
                <span className="appeal__tag">3 шага</span>
              </Button>
            </div>
          </div>
          <div className="appeal__side">
            <Image
              class="appeal__img"
              src={womenImg}
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
