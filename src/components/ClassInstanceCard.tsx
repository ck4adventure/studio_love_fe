import { Avatar, Box, CardActionArea, Typography, Card, CardMedia } from '@mui/material'
import React from 'react';


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


interface ClassInstanceProps {
  name: string,
  duration: number,
  description: string,
  instructor: string,
}


export default function ClassInstanceCard(props: ClassInstanceProps) {

  function handleCardClick(e: React.SyntheticEvent) {
    e.stopPropagation();
    e.preventDefault();
    console.log(e.currentTarget)
    console.log(props.name)
  }
  return (
    <Card  variant="outlined">
      <CardActionArea sx={{ display: 'flex' }} onClick={handleCardClick}>
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
      </CardActionArea>
    </Card>
  )
}