import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/styles/globalStyle'
import { darkTheme } from '../src/themes/dark'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
