import UpRightIcon from '../icons/up-right.svg?component'
import Image from './Image'
import './Result.css'

export default function Result(props) {
  return (
    <a href="#" class="result">
      <div className="result__head">
        <div className="result__pic">
          <Image
            class="result__ava"
            src={props.src}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
        <h3 className="result__title">{props.title}</h3>
      </div>
      <p className="result__text" innerHTML={props.text}></p>
      <span className="result__meta">{props.nickname}</span>
      <div className="result__pointer">
        <UpRightIcon class="result__pointer-icon" aria-hidden="true" />
      </div>
    </a>
  )
}
