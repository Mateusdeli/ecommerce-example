import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background: linear-gradient(180deg, #0D62AD 0%, #0D62AD 0%, #0D62AD 0%, #122C34 100%) no-repeat;
    color: ${({ theme }) => theme.colors.primary};
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`

export default GlobalStyle
