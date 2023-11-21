import './App.css'
import './fonts/ITC_Bauhaus_Medium.otf'
import AppFooterBar from './components/AppFooterBar/AppFooterBar'
import AppNavBar from './components/AppNavBar/AppNavBar'
import { Container, Typography } from '@mui/material'
import Section from './components/Section'

const weekdays = [
  "sunday",
  "MONDAY",
  "Tuesday",
  "WEDnesday",
  "Thursday",
  "Friday",
  "Saturday",
]
function App() {

  return (
    <>
    <AppNavBar />
    <Container maxWidth="lg">
      {weekdays.map(day => <Section name={day}></Section>)}
    </Container>


    <AppFooterBar />
    </>
  )
}

export default App
