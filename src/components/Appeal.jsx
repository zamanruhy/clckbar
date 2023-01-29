import womanImg from '../images/woman.png?format=png;webp;avif&width=700;1184'
import skateImg from '../images/skateboarder.png?format=png;webp;avif'
import emojiWomanImg from '../images/emoji-woman-technologist.png?format=png;webp;avif&quality=80'
import UpRightIcon from '../icons/up-right.svg?component'
import easyImg from '../images/easy.svg?metadata'
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
                class="appeal__emoji"
                src={emojiWomanImg}
                alt="👩‍💻"
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
              <Image
                class="appeal__decor-svg"
                src={easyImg}
                alt=""
                loading="lazy"
                decoding="async"
              />
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
                <span className="appeal__badge">3 шага</span>
              </Button>
            </div>
          </div>
          <div className="appeal__side">
            <Image
              class="appeal__img"
              src={womanImg}
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
