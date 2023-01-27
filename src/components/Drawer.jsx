import {
  mergeProps,
  splitProps,
  onMount,
  onCleanup,
  createSignal,
  createMemo
  // Show
} from 'solid-js'
import { Portal } from 'solid-js/web'
// import { Transition } from 'solid-transition-group'
// import { Motion, Presence } from '@motionone/solid'
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
  const [mounted, setMounted] = createSignal(false)
  const open = createMemo(() => props.open && mounted())
  const { registerModal, unregisterModal, trapFocus } = useModal()
  let el
  let returnFocusEl = null
  const drawer = {}

  function onBeforeEnter() {
    props.onOpen?.()
    returnFocusEl = returnFocusEl || document.activeElement
    registerModal(drawer)
  }
  function onAfterEnter() {
    props.onOpened?.()
    setFocus()
  }
  function onBeforeLeave() {
    props.onClose?.()
  }
  function onAfterLeave() {
    props.onClosed?.()
    returnFocusEl.focus?.()
    returnFocusEl = null
    unregisterModal(drawer)
  }
  // function onMotionStart() {
  //   open() ? onBeforeEnter() : onBeforeLeave()
  // }
  // function onMotionComplete() {
  //   open() ? onAfterEnter() : onAfterLeave()
  // }

  function onTransitionStart(e) {
    if (e.propertyName === 'transform') {
      open() ? onBeforeEnter() : onBeforeLeave()
    }
  }
  function onTransitionEnd(e) {
    if (e.propertyName === 'transform') {
      open() ? onAfterEnter() : onAfterLeave()
    }
  }

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
      <div
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
      </div>

      {/* <Presence exitBeforeEnter>
        <Show when={open()}>
          <Motion.div
            initial={{ x: '100%' }}
            animate={{
              x: 0,
              transition: {
                duration: 0.2,
                easing: 'cubic-bezier(0, 0, 0.2, 1)'
              }
            }}
            exit={{
              x: '100%',
              transition: {
                duration: 0.15,
                easing: 'cubic-bezier(0.4, 0, 1, 1)'
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
      </Presence> */}

      {/* <Transition
        enterActiveClass="drawer_in"
        enterClass="will-change-transform"
        // enterClass="translate-x-full"
        // enterToClass="translate-x-0"
        exitActiveClass="drawer_out"
        // exitClass="translate-x-0"
        // exitToClass="translate-x-full"
        onBeforeEnter={onBeforeEnter}
        onAfterEnter={onAfterEnter}
        onBeforeExit={onBeforeLeave}
        onAfterExit={onAfterLeave}
      >
        {open() && (
          <div
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
          </div>
        )}
      </Transition> */}
    </Portal>
  )
}
