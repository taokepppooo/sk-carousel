export type RootOptionsType = {}
export type ContainerOptionsType = {}
export type SlidesOptionsType = {
  align: 'center'
  loop: boolean
  direction: 'ltr' | 'rtl' | 'ttb' | 'btt'
  speed: number
  startIndex: number
  auto: boolean
}

export type OptionsType = {
  root: RootOptionsType
  container: ContainerOptionsType
  slides: SlidesOptionsType
}
export type SKOptionsType = Partial<OptionsType>
export type SKRootOptionsType = Partial<RootOptionsType>
export type SKContainerOptionsType = Partial<ContainerOptionsType>
export type SKSlidesOptionsType = Partial<SlidesOptionsType>

export const defaultRootOptions: RootOptionsType = {}
export const defaultContainerOptions: ContainerOptionsType = {}
export const defaultSlidesOptions: SlidesOptionsType = {
  align: 'center',
  loop: true,
  direction: 'ltr',
  speed: 10,
  startIndex: 0,
  auto: true,
}
export const defaultOptions: OptionsType = {
  root: defaultRootOptions,
  container: defaultContainerOptions,
  slides: defaultSlidesOptions,
}
