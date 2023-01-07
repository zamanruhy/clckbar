import { splitProps } from 'solid-js'
import './Hamburger.css'

export default function Hamburger(props) {
  const [, rest] = splitProps(props, ['active', 'class', 'classList'])
  return (
    <button
      class="hamburger"
      classList={{
        [props.class]: Boolean(props.class),
        ...props.classList
      }}
      type="button"
      aria-label="Переключить навигацию"
      {...rest}
    >
      <span class="hamburger__bar" />
      <span class="hamburger__bar" />
    </button>
  )
}
