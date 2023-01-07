// import emojiImg from '../images/emoji.png?format=png;webp'
// import catImg from '../images/cat.png?format=png;webp'
import handImg from '../images/hand.png?format=png;webp'
import Image from './Image'
import HookIcon from '../icons/hook.svg?component'
import UpCircleIcon from '../icons/up-circle.svg?component'
import UpRightIcon from '../icons/up-right.svg?component'
import Button from './Button'

import './Intro.css'

export default function Intro() {
  return (
    <section class="intro">
      <div className="container">
        <div className="intro__inner">
          <div className="intro__main">
            <h1 className="intro__title">
              <div className="">
                <img
                  className="inline w-[1em] align-[-0.06em]"
                  src="data:image/webp;base64,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"
                  alt=""
                />{' '}
                <span className="intro__phrase">Получай</span>
              </div>
              <div className="text-pink">
                <span className="intro__phrase">больше клиентов</span>{' '}
                <UpCircleIcon className="inline h-[0.643em] fill-current align-[-0.03em]" />
              </div>
              <div>
                с живой
                <img
                  className="my-[0.07em] mx-[0.3em] inline w-[1.285em]"
                  src="data:image/webp;base64,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"
                  alt=""
                />
                страницей
              </div>
              <div>
                кликбар <span class="text-pink">уже сегодня</span>
              </div>
              <HookIcon className="intro__hook" />
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
                Создать страницу
                <UpRightIcon class="ml-[23px] mb-[2px] mr-[5px] h-[12px] max-md:ml-[18px] max-md:h-[10px]" />
                <span className="intro__tag">7 дней доступа</span>
              </Button>
            </div>
          </div>
          <div className="intro__side">
            <Image src={handImg} alt="" fetchpriority="high" />
          </div>
        </div>
      </div>
    </section>
  )
}
