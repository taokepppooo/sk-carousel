import SKCarousel from '../build/esm/sk-carousel.esm.js'

const root = document.getElementById('main-carousel')
const container = document.getElementById('embla__container')
const slides = container.children ? container.children : []
SKCarousel(
  {
    root,
    container,
    slides,
  },
  { align: 'left' }
)
