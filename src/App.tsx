import './App.css'
import './fonts/ITC_Bauhaus_Medium.otf'
import {
  RouterProvider,
} from "react-router-dom";
import AppFooterBar from './components/AppFooterBar/AppFooterBar'
import AppNavBar from './components/AppNavBar/AppNavBar'
import { router } from './routes/routes'
import ErrorBoundary from './components/ErrorBoundary'




function App() {

  return (
    <>
      <ErrorBoundary>
        <AppNavBar />
        <RouterProvider router={router} />
        <AppFooterBar />
      </ErrorBoundary>
    </>
  )
}

export default App
