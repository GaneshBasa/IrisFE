'use client'

import { FC, useEffect, useState } from 'react'


const timeOptions : Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit'
}


export const DateTime : FC = () => {
  const [ value, setValue ] = useState<Date>( new Date() )

  const syncTime = () => setValue( new Date() )

  useEffect( () => {
    if ( value ) {
      setTimeout( () => {
        syncTime()
        setInterval( syncTime, 60 * 1000 )
      }, ( 60 - value.getSeconds() ) * 1000 )
    }
  }, [ value ] )

  return (
    <span>
      { value.toLocaleTimeString( 'en-us', timeOptions ) } • { value.toDateString() }
    </span>
  )
}
