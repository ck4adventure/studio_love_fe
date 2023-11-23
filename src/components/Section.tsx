import {  Typography, List } from '@mui/material'
import { ClassesList } from '../data/classeslist.js'
import ClassCard from './ClassInstanceCard.js'

interface SectionProps {
  name: string,
}
export default function Section(props: SectionProps) {
  return (
    <div>
      <Typography variant='h6'>{props.name}</Typography>
      <List>
        {ClassesList.map(item => <ClassCard name={item.name} duration={item.duration} description={item.description} instructor={item.instructor} />)}
      </List>
    </div>
  )
}