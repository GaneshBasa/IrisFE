import { FC } from 'react'
import { Construction } from 'lucide-react'


const RootPage : FC = () => (
  <section className='min-h-screen flex'>
    <div className='m-auto flex portrait:flex-col landscape:space-x-2.5 portrait:space-y-2.5 text-center'>
      <Construction className='size-12 m-auto' />
      <h1 className='text-5xl font-extrabold'>
        Site Under Construction !
      </h1>
    </div>
  </section>
)


export default RootPage
