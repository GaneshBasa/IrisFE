import { FC } from 'react'
import { SiGooglemeet as LogoIcon } from 'react-icons/si'

import { ThemeCustomizer } from '@components/theme-customizer'
import { DateTime } from '@components/datetime'
import { Feedback } from '@components/feedback'
import { Settings } from '@components/settings'
import { User } from '@components/user'
import { name } from '@common/config'


const SiteHeader : FC = () => (
  <header className='fixed top-0 w-full z-50 px-[5vw] border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 select-none'>

    <nav className='flex items-center justify-between h-14'>

      <div className='flex items-center space-x-2 text-xl'>

        <LogoIcon />

        <span className='uppercase font-bold'>
          { name }
        </span>

      </div>

      <div className='flex items-center space-x-5 text-lg text-muted-foreground'>

        <DateTime />

        <div className='flex items-center space-x-1'>

          <Feedback />

          <Settings />

          <ThemeCustomizer />

        </div>

        <User />

      </div>

    </nav>

  </header>
)


export default SiteHeader
