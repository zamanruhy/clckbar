import {
  mergeProps,
  splitProps,
  onMount,
  onCleanup,
  createSignal,
  createMemo
} from 'solid-js'
import { Portal } from 'solid-js/web'
import { Transition } from 'solid-transition-group'
import useModal from '@/hooks/use-modal'

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
    queueMicrotask(() => {
      returnFocusEl = returnFocusEl || document.activeElement
      registerModal(drawer)
    })
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
      <Transition
        enterActiveClass="transition duration-200 ease-out"
        enterClass="translate-x-full"
        enterToClass="translate-x-0"
        exitActiveClass="transition duration-150 ease-in"
        exitClass="translate-x-0"
        exitToClass="translate-x-full"
        onBeforeEnter={onBeforeEnter}
        onAfterEnter={onAfterEnter}
        onBeforeExit={onBeforeLeave}
        onAfterExit={onAfterLeave}
      >
        {open() && (
          <div
            class="fixed top-[var(--header-height)] bottom-0 right-0 w-full outline-none"
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
      </Transition>
    </Portal>
  )
}
