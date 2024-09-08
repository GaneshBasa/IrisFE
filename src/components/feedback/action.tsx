import { FC, PropsWithChildren } from 'react'

import { ActionProps } from '@common/interfaces'
import { Button } from '@ui/button'


export const ActionContainer : FC<PropsWithChildren> = ({ children }) => (
  <div className='mt-10'>
    { children }
  </div>
)


export const Action : FC<ActionProps> = ({ icon, text }) => (
  <Button variant='ghost' className='h-12 flex space-x-2 w-full justify-start'>

    <span className='bg-[hsl(218,20%,35%)] size-7 flex items-center justify-center rounded-full'>
      { icon }
    </span>
    
    <span>
      { text }
    </span>

  </Button>
)
