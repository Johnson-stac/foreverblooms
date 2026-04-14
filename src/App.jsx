import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductDetailsPage from './pages/ProductDetailsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:slug" element={<ProductDetailsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
