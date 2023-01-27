const modals = new Set()
let top = 0

export default function useModal() {
  return { registerModal, unregisterModal, trapFocus }
}

function registerModal(modal) {
  if (modals.has(modal)) return
  modals.add(modal)
  if (modals.size === 1) {
    enterFirst()
  }
}

function unregisterModal(modal) {
  if (!modals.has(modal)) return
  modals.delete(modal)
  if (modals.size === 0) {
    exitLast()
  }
}

function enterFirst() {
  // document.documentElement.style.setProperty(
  //   '--scrollbar-visible-width',
  //   `${window.innerWidth - document.documentElement.clientWidth}px`
  // )
  top = window.scrollY
  Object.assign(document.body.style, {
    paddingRight: `${
      window.innerWidth - document.documentElement.clientWidth
    }px`,
    overflow: 'hidden',
    position: 'fixed',
    width: '100%',
    top: `${top * -1}px`
  })
}

function exitLast() {
  // document.documentElement.style.removeProperty('--scrollbar-visible-width')
  Object.assign(document.body.style, {
    paddingRight: '',
    overflow: '',
    position: '',
    width: '',
    top: ''
  })
  document.documentElement.style.scrollBehavior = 'auto'
  window.scrollTo(0, top)
  document.documentElement.style.scrollBehavior = ''
}

function getFocusable(node) {
  // https://www.smashingmagazine.com/2021/07/accessible-dialog-from-scratch/
  const selector = [
    'a[href]',
    'area[href]',
    'input:not([type="hidden"]):not([type="radio"]):not([disabled])',
    'input[type="radio"]:not([disabled]):checked',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'iframe',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]',
    '[tabindex]'
  ]
    .map((s) => `${s}:not([tabindex^="-"])`)
    .join(', ')

  return Array.from(node.querySelectorAll(selector)).filter(
    (el) => el.offsetWidth || el.offsetHeight || el.getClientRects().length
  )
}

function trapFocus(e) {
  if (e.key !== 'Tab') return

  const focusable = getFocusable(e.currentTarget)

  if (focusable.length === 0) {
    e.preventDefault()
    return
  }

  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  const active = document.activeElement

  if (e.shiftKey) {
    if (active === first || active === e.currentTarget) {
      last.focus()
      e.preventDefault()
    }
  } else {
    if (active === last) {
      first.focus()
      e.preventDefault()
    }
  }
}
