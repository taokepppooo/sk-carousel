import type { SKOptionsType } from './Options.js'
import { defaultOptions } from './Options.js'

export type SKNodesType = {
  root: HTMLElement
  container?: HTMLElement
  slides?: HTMLElement[]
}

export type SKCarouselType = {}

function SKCarousel(
  nodes: HTMLElement | SKNodesType,
  options: SKOptionsType
): SKCarouselType {
  let root: HTMLElement
  let container: HTMLElement
  let slides: HTMLElement[]

  function storeElements(): void {
    const customContainer = 'container' in nodes && nodes.container
    const customSlides = 'slides' in nodes && nodes.slides

    root = 'root' in nodes ? nodes.root : nodes
    container = customContainer || <HTMLElement>root.children[0]
    slides = customSlides || [].slice.call(container.children)
    console.log(slides)
  }

  function activate(options: SKOptionsType): void {
    storeElements()
    console.log(defaultOptions)
    console.log(options)
  }

  activate(options)
  const carouselType: SKCarouselType = {}
  return carouselType
}

export default SKCarousel
