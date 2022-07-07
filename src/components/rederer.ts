import type { SKNodesType } from './types'
import type { SKOptionsType } from './options'
import { rootDraw, containerDraw, slidesDraw } from './draw'

function Renderer(elements: SKNodesType, options: SKOptionsType) {
  // const { align, loop, direction, speed, startIndex, auto } = options

  draw(elements, options)
}

function draw(elements: SKNodesType, options: SKOptionsType) {
  const { root, container, slides } = elements

  rootDraw(root, options?.root)
  containerDraw(container, options?.container)
  slidesDraw(slides, options?.slides)
}

export default Renderer
