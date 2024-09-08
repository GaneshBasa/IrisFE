'use client'

import { FC } from 'react'
import { useTheme } from 'next-themes'
import { LuCog as Trigger, LuMoon, LuSun, LuMonitorDot, LuUndo2 as Reset, LuCheck } from 'react-icons/lu'

import { cn } from '@lib/utils'
import { useColor } from '@hooks/use-color'
import { ThemeWrapper } from '@components/theme-wrapper'
import { themes } from '@common/themes'

import { Button } from '@ui/button'
import { Label } from '@ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@ui/popover'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@ui/drawer'


export const ThemeCustomizer : FC = () => (
  <>
    <div className='portrait:hidden'>
      <Popover>

        <PopoverTrigger asChild>
          <Button variant='ghost' size='icon' className='bg-transparent'>
            <Trigger className='size-6' />
          </Button>
        </PopoverTrigger>

        <PopoverContent className='p-6 rounded-xl w-[400px]'>

          <Customizer />

        </PopoverContent>

      </Popover>
    </div>

    <div className='landscape:hidden'>
      <Drawer>

        <DrawerTrigger asChild>
          <Button variant='ghost' size='icon' className='bg-transparent'>
            <Trigger />
          </Button>
        </DrawerTrigger>

        <DrawerContent className='p-6'>

          <DrawerHeader>
            <DrawerTitle />
            <DrawerDescription />
          </DrawerHeader>

          <Customizer />

        </DrawerContent>

      </Drawer>
    </div>
  </>
)


const Customizer : FC = () => {
  const { theme: mode, setTheme: setMode } = useTheme()
  const [ color, setColor ] = useColor()

  return (
    <ThemeWrapper className='space-y-4' >

      <div className='flex justify-between'>

        <div>
          <div className='font-semibold'>
            Customize
          </div>
          <div className='text-xs text-muted-foreground'>
            Pick a style and color for your components.
          </div>
        </div>

        <Button
          variant='ghost'
          size='icon'
          className='bg-transparent'
          onClick={ () => {
            setMode( 'system' )
            setColor( themes[ 0 ] )
          } }
        >
          <Reset />
          <span className='sr-only'>Reset</span>
        </Button>

      </div>

      <div className='space-y-1.5'>

        <Label>Mode</Label>

        <div className='grid grid-cols-3 gap-2'>

          <Button
            variant='outline'
            size='sm'
            onClick={ () => setMode( 'light' ) }
            className={ cn(
              'px-2.5 justify-between space-x-2.5',
              mode == 'light' && 'border-2 border-primary'
            ) }
          >
            Light
            <LuSun className='size-5' />
          </Button>

          <Button
            variant='outline'
            size='sm'
            onClick={ () => setMode( 'system' ) }
            className={ cn(
              'px-2.5 justify-between space-x-2.5',
              mode == 'system' && 'border-2 border-primary'
            ) }
          >
            System
            <LuMonitorDot className='size-5' />
          </Button>

          <Button
            variant='outline'
            size='sm'
            onClick={ () => setMode( 'dark' ) }
            className={ cn(
              'px-2.5 justify-between space-x-2.5',
              mode == 'dark' && 'border-2 border-primary'
            ) }
          >
            Dark
            <LuMoon className='size-5' />
          </Button>

        </div>
        
      </div>

      <div className='space-y-1.5'>

        <Label>Color</Label>

        <div className='grid grid-cols-3 gap-2'>
        {
          themes.map( theme =>  (
            <Button
              variant='outline'
              size='sm'
              key={ theme.toLowerCase() }
              onClick={ () => setColor( theme ) }
              className={ cn(
                `theme-${ theme.toLowerCase() }`,
                'px-2.5 justify-between space-x-2.5',
                color == theme && 'border-2 border-primary'
              ) }
            >
              { theme }
              <span className='size-5 flex items-center justify-center rounded-full bg-primary'>
                { color == theme && <LuCheck className='h-4 w-4 text-background' /> }
              </span>
            </Button>
          ) )
        }
        </div>
        
      </div>

    </ThemeWrapper>
  )
}
