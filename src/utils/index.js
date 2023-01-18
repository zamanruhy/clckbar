export function windowLoaded() {
  return new Promise((resolve) => {
    if (document.readyState === 'complete') {
      resolve()
    } else {
      window.onload = resolve
    }
  })
}

export function imageLoaded(imgEl) {
  return new Promise((resolve) => {
    if (imgEl.complete) {
      resolve()
    } else {
      imgEl.onload = resolve
    }
  })
}

export function camelize(str) {
  return str.replace(/-(\w)/g, (_, c) => {
    return c ? c.toUpperCase() : ''
  })
}

export function hyphenate(str) {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
}

export function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}
