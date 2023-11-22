import { Avatar, Box, Typography, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Card, CardMedia } from '@mui/material'
import { ClassesList } from '../data/classeslist.js'


function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
interface ClassListingItemProps {
  name: string,
  duration: number,
  description: string,
  instructor: string,
}
// TODO add flex rules to listItems
function ClassListingItem(props: ClassListingItemProps) {
  return (
    <>
      <ListItem sx={{ p: 0 }}>
        <ListItemButton disableGutters>
          <ListItemAvatar>
            <Avatar {...stringAvatar(props.instructor)} />
          </ListItemAvatar>
          <ListItemText>{props.name}</ListItemText>
          <ListItemText>{props.instructor}</ListItemText>
          <ListItemText sx={{ textAlign: 'right' }}>7pm   {props.duration}min</ListItemText>
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  )
}

function ClassCard(props: ClassListingItemProps) {
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 1}}>
        <Avatar {...stringAvatar(props.instructor)} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Typography sx={{p: 1}}>{props.name}</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between' }}>
          <Typography sx={{p: 1}}>{props.instructor}</Typography>
          <Typography sx={{p: 1}}>9pm - 10:15pm</Typography>
        </Box>
      </Box>
    </Card>
  )
}

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