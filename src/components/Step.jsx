import profileImg from '../images/profile.png?format=png;webp'
import bgImg from '../images/step-bg.svg?metadata'
import Image from './Image'

import './Step.css'

export default function Step(props) {
  return (
    <article class="step">
      <Image
        class="step__decor"
        src={props.decor}
        alt=""
        loading="lazy"
        decoding="async"
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
        <Image
          class="step__bg"
          src={bgImg}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
    </article>
  )
}
