import {
  mergeProps,
  splitProps,
  onMount,
  onCleanup,
  createSignal,
  createMemo,
  // createEffect
  Show
} from 'solid-js'
import { Portal } from 'solid-js/web'
// import { Transition } from 'solid-transition-group'
import { Motion, Presence } from '@motionone/solid'
import useModal from '@/hooks/use-modal'

import './Drawer.css'

export default function Drawer(props) {
  props = mergeProps(
    {
      open: false,
      closeOnBackdrop: true,
      closeOnEscape: true
    },
    props
  )
  const [, rest] = splitProps(props, [
    'class',
    'open',
    'onRequestClose',
    'closeOnBackdrop',
    'closeOnEscape',
    'children',
    'onOpen',
    'onOpened',
    'onClose',
    'onClosed'
  ])
  let el
  let returnFocusEl = null
  const drawer = {}
  const { registerModal, unregisterModal, trapFocus } = useModal()
  const [mounted, setMounted] = createSignal(false)
  const open = createMemo(() => props.open && mounted())

  function onEnter() {
    props.onOpen?.()
    returnFocusEl = returnFocusEl || document.activeElement
    registerModal(drawer)
  }
  function onEntered() {
    props.onOpened?.()
    setFocus()
  }
  function onLeave() {
    props.onClose?.()
  }
  function onLeft() {
    props.onClosed?.()
    returnFocusEl?.focus?.()
    returnFocusEl = null
    unregisterModal(drawer)
  }

  function onMotionStart() {
    open() ? onEnter() : onLeave()
  }
  function onMotionComplete() {
    open() ? onEntered() : onLeft()
  }

  // createEffect(() => {
  //   open() ? onBeforeEnter() : onBeforeLeave()
  // })

  // function onTransitionStart(e) {
  //   if (e.propertyName === 'transform') {
  //     open() ? onEnter() : onLeave()
  //   }
  // }
  // function onTransitionEnd(e) {
  //   if (e.propertyName === 'transform') {
  //     open() ? onEntered() : onLeft()
  //   }
  // }

  function onEscape(e) {
    if (props.closeOnEscape && e.key === 'Escape') {
      props.onRequestClose?.()
    }
  }
  function setFocus() {
    if (!el.contains(document.activeElement)) {
      el.focus()
    }
  }

  onMount(() => {
    setMounted(true)
    onCleanup(() => unregisterModal(drawer))
  })

  return (
    <Portal mount={document.body}>
      {/* <div
        class="drawer"
        classList={{
          [props.class]: Boolean(props.class),
          drawer_open: open()
        }}
        role="dialog"
        aria-modal="true"
        {...rest}
        tabindex="-1"
        ref={el}
        onKeydown={(e) => {
          onEscape(e)
          trapFocus(e)
        }}
        onTransitionStart={onTransitionStart}
        onTransitionEnd={onTransitionEnd}
      >
        {props.children}
      </div> */}

      <Presence>
        <Show when={open()}>
          <Motion.div
            initial={{ x: '100%' }}
            animate={{
              x: 0,
              transition: {
                duration: 0.2,
                easing: [0, 0, 0.2, 1]
              }
            }}
            exit={{
              x: '100%',
              transition: {
                duration: 0.15,
                easing: [0.4, 0, 1, 1]
              }
            }}
            // transition={{ duration: 0.3 }}
            onMotionStart={onMotionStart}
            onMotionComplete={onMotionComplete}
            class="drawer"
            classList={{ [props.class]: Boolean(props.class) }}
            role="dialog"
            aria-modal="true"
            {...rest}
            tabindex="-1"
            ref={el}
            onKeydown={(e) => {
              onEscape(e)
              trapFocus(e)
            }}
          >
            {props.children}
          </Motion.div>
        </Show>
      </Presence>
    </Portal>
  )
}
