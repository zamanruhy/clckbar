export function windowLoaded(resolve, reject) {
  function fn(res, rej) {
    if (document.readyState === 'complete') {
      res()
    } else {
      window.onload = res
      window.onerror = rej
    }
  }
  return typeof resolve === 'function' ? fn(resolve, reject) : new Promise(fn)
}

export function imageLoaded(imgEl, resolve, reject) {
  function fn(res, rej) {
    if (imgEl.complete) {
      res()
    } else {
      imgEl.onload = res
      imgEl.onerror = rej
    }
  }
  return typeof resolve === 'function' ? fn(resolve, reject) : new Promise(fn)
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
