import './App.css'
import './fonts/ITC_Bauhaus_Medium.otf'
import AppFooterBar from './components/AppFooterBar/AppFooterBar'
import AppNavBar from './components/AppNavBar/AppNavBar'
import CalendarPage from './pages/CalendarPage'
import ErrorBoundary from './components/ErrorBoundary'


function App() {

  return (
    <>
      <AppNavBar />
      <ErrorBoundary>
        <CalendarPage />

      </ErrorBoundary>
      <AppFooterBar />
    </>
  )
}

export default App
