import clientProfileImg from '../images/client-profile.png?format=png;webp'
import Image from './Image'

import './Client.css'

export default function Client(props) {
  return (
    <article
      class="client"
      classList={{ [`client_${props.mod}`]: Boolean(props.mod) }}
    >
      <div className="client__content">
        <h3 className="client__title" innerHTML={props.name}></h3>
        <p className="client__text" innerHTML={props.desc}></p>
      </div>
      <div className="client__side">
        <Image
          class="client__img"
          src={clientProfileImg}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
    </article>
  )
}
