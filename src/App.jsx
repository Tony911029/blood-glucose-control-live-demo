import { useState } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { RouterConfig } from './navigation/RouterConfig.jsx'
// MUI Theme
import { ThemeProvider } from '@material-ui/core'
import { dark, light } from './styles/muiTheme'
import './App.css'

function App() {
  const [darkState, setDarkState] = useState(false)
  // const handleThemeChange = () => {
  //   setDarkState(!darkState)
  //   console.log('theme=', darkState ? 'dark' : 'light')
  // }

  return (
    <>
      <div>
          <ThemeProvider theme={darkState ? dark() : light()}>
              <BrowserRouter>
                <RouterConfig />
              </BrowserRouter>
          </ThemeProvider>
      </div>
    </>
  )
}

export default App
