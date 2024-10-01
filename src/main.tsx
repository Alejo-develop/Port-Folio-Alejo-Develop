import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './App'
import BackgroundGradient from './utils/background.util'
import CoverParticles from './utils/cover.particles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BackgroundGradient>
      <CoverParticles />
      <RouterProvider router={appRouter} />
    </BackgroundGradient>
  </StrictMode>,
)
