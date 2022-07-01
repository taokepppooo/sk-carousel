import { SKOptionsType } from './Options'

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
    const providedContainer = 'container' in nodes && nodes.container
    const providedSlides = 'slides' in nodes && nodes.slides

    root = 'root' in nodes ? nodes.root : nodes
    container = providedContainer || <HTMLElement>root.children[0]
    slides = providedSlides || [].slice.call(container.children)
  }

  function activate(options: SKOptionsType): void {
    storeElements()
  }

  const carouselType: SKCarouselType = {}
  return carouselType
}

export default SKCarousel
