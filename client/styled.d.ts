import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string,
      white: string,
    },
    fontSizes: {
      small: string,
      medium: string,
      normal: string,
      large: string,
      extra: string,
    },
    paddings: {
      extraSmall: string,
      small: string,
      medium: string,
      large: string,
    }
  }
}
