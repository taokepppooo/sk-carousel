export type OptionsType = {
  align: 'center'
  loop: boolean
  speed: number
  startIndex: number
}

export const defaultOptions: OptionsType = {
  align: 'center',
  loop: true,
  speed: 10,
  startIndex: 0,
}

export type SKOptionsType = Partial<OptionsType>
