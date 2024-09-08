'use client'

import { ComponentProps, FC, useEffect, useState } from 'react'

import { cn } from '@lib/utils'
import { useColor } from '@hooks/use-color'

interface ThemeWrapperProps extends ComponentProps<'div'> {
  defaultTheme?: string
}

export const ThemeWrapper : FC<ThemeWrapperProps> = ( { defaultTheme, children, className } ) => {
  const [ mounted, setMounted ] = useState( false )
  const [ color ] = useColor()

  useEffect( () => setMounted( true ), [] )

  return (
    <div
      className={
        cn(
          `theme-${ defaultTheme || color.toLowerCase() }`,
          className
        )
      }
    >
      {
        mounted
        ?
        children
        :
        <></>
      }
    </div>
  )
}
