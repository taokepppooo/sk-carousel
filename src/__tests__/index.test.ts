import SKCarousel, { SKCarouselType } from '../components/index'
const initializeSK = (
  withContainer: boolean = true,
  withSlides: boolean = true
): (() => SKCarouselType) => {
  const rootNode = document.createElement('div')
  const containerNode = document.createElement('div')

  if (withContainer) rootNode.appendChild(containerNode)
  if (withSlides) {
    for (let i = 0; i < 3; i += 1) {
      containerNode.appendChild(document.createElement('div'))
    }
  }
  return () => SKCarousel(rootNode, {})
}
describe('SKCarousel', () => {
  describe('When initialized it does not throw when', () => {
    test('All necessary nodes are provided', () => {
      expect(initializeSK(true, true)).not.toThrow()
    })
  })
})
