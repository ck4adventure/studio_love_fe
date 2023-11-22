import { Container } from '@mui/material'
import Section from '../components/Section'

// CalendarPage shows the main schedule view for a given studio
// Default is list view, as this is mobile friendly
// and TODO is a left to right weekly view that is wide screen friendly

const weekdays = [
  "sunday",
  "MONDAY",
  "Tuesday",
  "WEDnesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export default function CalendarPage() {
  const formattedWeekdays = weekdays.map(day => day[0].toUpperCase() + day.slice(1).toLowerCase())
  return (
    <Container maxWidth="lg" sx={{ textAlign: "left", marginBottom: 4 }}>
      {formattedWeekdays.map(day => <Section name={day}></Section>)}
    </Container>
  )
}