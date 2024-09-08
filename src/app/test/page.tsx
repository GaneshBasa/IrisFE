'use client'

import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { LuFlaskConical } from 'react-icons/lu'

import { be, randomUserAPI } from '@common/config'


const TestPage : FC = () => {
  const [ mounted, setMounted ] = useState( false )

  useEffect( () => setMounted( true ), [] )

  useEffect( () => {
    if ( mounted ) {
      axios.get( be.http_root ).then( console.log ).catch( console.error )
    }
  }, [ mounted ] )


  return (
    <section className='min-h-screen flex'>
      <div className='m-auto flex portrait:flex-col landscape:space-x-2.5 portrait:space-y-2.5 text-center'>
        <LuFlaskConical className='size-12 m-auto' />
        <h1 className='text-5xl font-extrabold'>
          Test Page
        </h1>
      </div>
    </section>
  )
}


export default TestPage
