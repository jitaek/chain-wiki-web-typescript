import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import { ThemeInterface } from "./theme";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

const sizes: any = {
  phone: 320,
  tablet: 768,
  desktop: 1024,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc: any, label) => {
  acc[label] = (...args: any) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(args)}
    }
  `

  return acc
}, {})

export { css, createGlobalStyle, keyframes, ThemeProvider, media };
export default styled;