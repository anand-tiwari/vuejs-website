import Vue from 'vue'

const lazyLoadImage = (el) => {
  var src = el.getAttribute('data-src')
  let img = new Image()
  img.onload = () => {
    switch (el.tagName) {
      case 'FIGURE': {
        el.style.backgroundImage = `url(${src})`
        break
      }
      case 'IMG': {
        el.src = src
        break
      }
    }
  }
  img.src = src
}
export const lazyimg = {
  bind (el, binding) {
    lazyLoadImage(el)
  },
  update (el, binding) {
    if (binding.value !== binding.oldValue) {
      lazyLoadImage(el)
    }
  },
  unbind (el) { }
}
Vue.directive('lazyimg', lazyimg)

/* directive not completed */
