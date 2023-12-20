
import { Box, Button, IconButton } from '@mui/material'

import { DatePicker } from '@mui/x-date-pickers';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import dayjs from 'dayjs'

import { useState } from 'react';

export function CalendarViewControl() {
  const [selectedDate, setSelectedDate] = useState(dayjs())

  function handleTodayButton() {
    setSelectedDate(dayjs())
  }

  function handleNavBefore() {
    setSelectedDate(date => dayjs(date).subtract(1, 'week'))
  }

  function handleNavNext() {
    setSelectedDate(date => dayjs(date).add(1, 'week'))
  }

  return (
    <>
      <Box display={"flex"} sx={{ alignItems: "center", justifyContent: "right" }}>
        <Button variant="text" sx={{ mr: 2 }} onClick={handleTodayButton}>Today</Button>
        <Box display={"flex"} sx={{ alignItems: "center" }}>
          <IconButton onClick={handleNavBefore}>
            <NavigateBeforeIcon fontSize="large" />
          </IconButton>
          <DatePicker value={dayjs(selectedDate)} />
          <IconButton onClick={handleNavNext}>
            <NavigateNextIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </>
  )
}