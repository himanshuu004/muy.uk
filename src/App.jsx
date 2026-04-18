import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import ChatBotPlaceholder from './components/ChatBotPlaceholder/ChatBotPlaceholder'
import CurtainOverlay from './components/CurtainOverlay/CurtainOverlay'

function App() {
  const [siteReady, setSiteReady] = useState(false)

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {siteReady && (
        <>
          <AppRoutes />
          <ChatBotPlaceholder />
        </>
      )}
      <CurtainOverlay onInaugurate={() => setSiteReady(true)} />
    </BrowserRouter>
  )
}

export default App
