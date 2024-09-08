import { FC } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@ui/avatar'


export const User : FC = () => (
  <Avatar>
    
    <AvatarImage src='https://github.com/GaneshBasa.png' />
    
    <AvatarFallback>
      GB
    </AvatarFallback>

  </Avatar>
)
