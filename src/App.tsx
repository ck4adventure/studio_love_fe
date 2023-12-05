import './App.css'
import './fonts/ITC_Bauhaus_Medium.otf'
import {
  RouterProvider,
} from "react-router-dom";
import AppFooterBar from './components/AppFooterBar/AppFooterBar'
import AppNavBar from './components/AppNavBar/AppNavBar'
import { router } from './routes/routes'
import ErrorBoundary from './components/ErrorBoundary'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



function App() {

  return (
    <>
      <ErrorBoundary>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AppNavBar />
        <RouterProvider router={router} />
        <AppFooterBar />
        </LocalizationProvider>
      </ErrorBoundary>
    </>
  )
}

export default App
