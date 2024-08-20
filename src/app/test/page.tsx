'use client'

import { FC, useEffect } from 'react'
import { FlaskConical } from 'lucide-react'

import { be } from '@common/config'


const RootPage : FC = () => {
  useEffect(() => {
    console.log( be )

    fetch( be.http_root )
    .then( console.log )
    .catch( console.error )
  }, [])

  return (
    <section className='min-h-screen flex'>
      <div className='m-auto flex portrait:flex-col landscape:space-x-2.5 portrait:space-y-2.5 text-center'>
        <FlaskConical className='size-12 m-auto' />
        <h1 className='text-5xl font-extrabold'>
          Test Page
        </h1>
      </div>
    </section>
  )
}


export default RootPage
