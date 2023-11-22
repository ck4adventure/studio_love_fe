import { Avatar, Typography, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
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

function ClassListingItem(props: ClassListingItemProps) {
  return (
    <>
      <ListItem>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar {...stringAvatar(props.instructor)} />
          </ListItemAvatar>
          <ListItemText>{props.name}</ListItemText>
          <ListItemText>{props.description}</ListItemText>
          <ListItemText>{props.duration}</ListItemText>
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  )
}

interface SectionProps {
  name: string,
}
export default function Section(props: SectionProps) {
  return (
    <div>
      <Typography variant='h4'>{props.name}</Typography>
      <List>
        {ClassesList.map(item => <ClassListingItem name={item.name} duration={item.duration} description={item.description} instructor={item.instructor}/>)}
      </List>
    </div>
  )
}