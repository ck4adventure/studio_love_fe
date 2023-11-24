
import {
  createBrowserRouter,
} from "react-router-dom";
import CalendarPage from '../pages/CalendarPage'
import ErrorPage from '../pages/ErrorPage'
import AdminMainPage from '../pages/AdminPage'
import ContactPage from '../pages/ContactPage'


export const router = createBrowserRouter([
  {
    path: "/",
    element: <CalendarPage />,
    errorElement: <ErrorPage />,
  }, {
    path: "/admin",
    element: <AdminMainPage />,
  },{
    path: "/contact",
    element: <ContactPage />
  }
]);