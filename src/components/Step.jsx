import profileImg from '../images/profile.png?format=png;webp'
import BgIcon from '../icons/intro-bg.svg?component'
// import StepDecorOneIcon from '../icons/step-decor-one.svg?component'
import Image from './Image'

import './Step.css'

const textColors = ['text-lime', 'text-pink', 'text-violet']

export default function Step(props) {
  return (
    <article class="step">
      <props.Decor
        class="step__decor"
        classList={{ [textColors[props.index]]: true }}
        aria-hidden="true"
      />
      <div className="step__main">
        <div className="step__num">{props.index + 1}</div>
        <h3 className="step__title" innerHTML={props.title}></h3>
        <p className="step__text" innerHTML={props.text}></p>
      </div>
      <div className="step__side">
        <Image
          class="step__img"
          src={profileImg}
          alt=""
          loading="lazy"
          decoding="async"
        />
        <BgIcon class="step__bg" aria-hidden="true" />
      </div>
    </article>
  )
}
