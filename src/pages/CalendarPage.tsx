import { Box, Button, Container, IconButton, Typography } from '@mui/material'
import Section from '../components/Section';
import { DatePicker } from '@mui/x-date-pickers';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import dayjs from 'dayjs'
import { useState } from 'react';

// CalendarPage shows the main schedule view for a given studio
// Default is list view, as this is mobile friendly
// and TODO is a left to right weekly view that is wide screen friendly

// weekdays listed here wrongly in order to ensure format cleaner working
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
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const [showCalendar, setShowCalendar] = useState(false)
  // const prevMonth = dayjs().subtract(1, 'month')
  // const threeMonthsOut = dayjs().add(3, "month")

  // function handleDatePicker(date: any) {
  //   setSelectedDate(dayjs(date))

  // }

  function handleTodayButton() {
    setSelectedDate(dayjs())
  }

  function handleNavBefore() {
    setSelectedDate(date => dayjs(date).subtract(1, 'week'))

  }

  function handleNavNext() {
    setSelectedDate(date => dayjs(date).add(1, 'week'))
  }

  function handleShowCalendar() {
    setShowCalendar(!showCalendar)
  }


  return (
    <>
      <Container maxWidth="lg" sx={{ textAlign: "left", marginBottom: 4 }}>
        <Box display={"flex"} sx={{ justifyContent: "space-between" }}>
          <Box display={"flex"} sx={{ alignItems: "center" }}>
            <IconButton onClick={handleNavBefore}>
              <NavigateBeforeIcon fontSize="large" />
            </IconButton>
            <Typography component="div">{dayjs(selectedDate).format('MMM D')}</Typography>
            <IconButton onClick={handleNavNext}>
              <NavigateNextIcon fontSize="large" />
            </IconButton>
          </Box>
          <Box display={"flex"} sx={{ alignItems: "center" }}>
            <Button variant="text" sx={{mr: 2}} onClick={handleTodayButton}>Today</Button>
            <IconButton onClick={handleShowCalendar}>
              <CalendarTodayIcon fontSize="large"/>
            </IconButton>
          </Box>
        </Box>


        {formattedWeekdays.map(day => <Section name={day}></Section>)}
      </Container>
    </>
  )
}