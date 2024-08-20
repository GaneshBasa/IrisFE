import { FC } from 'react'
import type { Metadata } from 'next'
import type { RootLayoutProps } from '@common/interfaces'
import { Inter as FontSans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { cn } from '@lib/utils'
import { name } from '@common/config'
import '@styles/globals.css'


const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})


export const metadata : Metadata = {
  title: name,
  description: 'Video Conferencing App'
}


const RootLayout : FC < RootLayoutProps > = ({ children }) => (
  <html lang='en' suppressHydrationWarning>
    <head>
      <meta name='theme-color' media='(prefers-color-scheme: light)' content='white'/>
      <meta name='theme-color' media='(prefers-color-scheme: dark)' content='black'/>
      <link rel='apple-touch-icon' sizes='180x180' href='apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='favicon-16x16.png' />
      <link rel='manifest' href='site.webmanifest' crossOrigin='use-credentials' />
    </head>
    <body
      className={ cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable
      ) }
    >
      <ThemeProvider
        storageKey='mode'
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <main className='min-h-screen'>
          {children}
        </main>
      </ThemeProvider>
    </body>
  </html>
)


export default RootLayout
