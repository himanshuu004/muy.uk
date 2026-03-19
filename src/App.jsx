import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import ChatBotPlaceholder from './components/ChatBotPlaceholder/ChatBotPlaceholder'

// Main app component with routing
function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes />
      <ChatBotPlaceholder />
    </BrowserRouter>
  )
}

export default App


