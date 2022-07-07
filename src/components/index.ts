import type { SKOptionsType } from './options'
import { defaultOptions } from './options'
import Renderer from './rederer'
import { objectsMergeDeep } from '../utils'
import type { SKNodesType } from './types'

export type SKCarouselType = {}

function SKCarousel(
  nodes: HTMLElement | SKNodesType,
  options: SKOptionsType
): SKCarouselType {
  let root: HTMLElement
  let container: HTMLElement
  let slides: HTMLElement[]
  let baseOptions: SKOptionsType

  function storeElements(): void {
    const customContainer = 'container' in nodes && nodes.container
    const customSlides = 'slides' in nodes && nodes.slides

    root = 'root' in nodes ? nodes.root : nodes
    container = customContainer || <HTMLElement>root.children[0]
    slides = customSlides || [].slice.call(container.children)
  }

  function activate(options: SKOptionsType): void {
    storeElements()

    baseOptions = objectsMergeDeep(defaultOptions, options)

    Renderer({ root, container, slides }, baseOptions)
  }

  activate(options)
  const carouselType: SKCarouselType = {}
  return carouselType
}

export default SKCarousel
