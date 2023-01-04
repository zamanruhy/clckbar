import { splitProps } from 'solid-js'
import './Hamburger.css'

export default function Hamburger(props) {
  const [, rest] = splitProps(props, ['active', 'class', 'classList'])

  return (
    <button
      class="hamburger"
      classList={{
        [props.class]: Boolean(props.class),
        ...props.classList,
        hamburger_active: props.active
      }}
      type="button"
      aria-label="Toggle menu"
      {...rest}
    >
      <span class="hamburger__bar" />
      <span class="hamburger__bar" />
    </button>
  )
}
