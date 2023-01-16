import { splitProps, mergeProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'

import './Button.css'

export default function Button(props) {
  props = mergeProps({ as: 'button' }, props)
  const [, rest] = splitProps(props, [
    'class',
    'as',
    'variant',
    'size',
    'children'
    // 'prepend',
    // 'append'
  ])

  return (
    <Dynamic
      component={props.as}
      class="button"
      classList={{
        [props.class]: Boolean(props.class),
        [`button_${props.variant}`]: Boolean(props.variant),
        [`button_${props.size}`]: Boolean(props.size)
      }}
      {...rest}
    >
      {props.children}
      {/* {props.prepend}
      {props.children && (
        <span className="button__text contents">{props.children}</span>
      )}
      {props.append} */}
    </Dynamic>
  )
}
