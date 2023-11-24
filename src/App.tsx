import './App.css'
import './fonts/ITC_Bauhaus_Medium.otf'
import AppFooterBar from './components/AppFooterBar/AppFooterBar'
import AppNavBar from './components/AppNavBar/AppNavBar'
import CalendarPage from './pages/CalendarPage'
import ErrorBoundary from './components/ErrorBoundary'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminMainPage from './pages/AdminPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <CalendarPage />,
  }, {
    path: "/admin",
    element: <AdminMainPage />,
  }
]);


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
