import { FC } from 'react'
import {
  MdOutlineSettings as SettingsIcon,
  MdOutlineVideocam as VideoIcon,
  MdOutlineSpeaker as AudioIcon,
  MdOutlinePalette as ThemeIcon
} from 'react-icons/md'

import { Button } from '@ui/button'
import { Separator } from '@ui/separator'
import { ThemeWrapper } from '@components/theme-wrapper'
import { GeneralSection } from '@components/settings/section-general'
import { VideoSection } from '@components/settings/section-video'
import { AudioSection } from '@components/settings/section-audio'
import { ThemeSection } from '@components/settings/section-theme'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@ui/tabs'
import {
  Dialog,
  DialogPortal,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@ui/dialog'


export const Settings : FC = () => (
  <Dialog>

    <DialogTrigger asChild>
      <Button variant='ghost' size='icon' className='bg-transparent'>
        <SettingsIcon className='size-6' />
      </Button>
    </DialogTrigger>

    <DialogPortal>
      <DialogContent className='size-3/5 flex flex-col'>

        <DialogHeader className='px-2'>
          <DialogTitle>
            Settings
          </DialogTitle>
          <DialogDescription />
        </DialogHeader>

        <Tabs defaultValue='general' orientation='vertical' className='flex flex-grow space-x-5'>

        <ThemeWrapper>
          <TabsList className='flex-col h-max'>

            <TabsTrigger value='general' className={ TriggerClass }>
              <SettingsIcon className={ TriggerIconClass } />
              <span>
                General
              </span>
            </TabsTrigger>

            <TabsTrigger value='video' className={ TriggerClass }>
              <VideoIcon className={ TriggerIconClass } />
              <span>
                Video
              </span>
            </TabsTrigger>

            <TabsTrigger value='audio' className={ TriggerClass }>
              <AudioIcon className={ TriggerIconClass } />
              <span>
                Audio
              </span>
            </TabsTrigger>

            <TabsTrigger value='theme' className={ TriggerClass }>
              <ThemeIcon className={ TriggerIconClass } />
              <span>
                Theme
              </span>
            </TabsTrigger>

          </TabsList>
        </ThemeWrapper>

        <Separator orientation='vertical' />

        <ThemeWrapper className='w-full'>

          <TabsContent value='general'>
            <GeneralSection />
          </TabsContent>

          <TabsContent value='video'>
            <VideoSection />
          </TabsContent>

          <TabsContent value='audio'>
            <AudioSection />
          </TabsContent>

          <TabsContent value='theme'>
            <ThemeSection />
          </TabsContent>

        </ThemeWrapper>

        </Tabs>

      </DialogContent>
    </DialogPortal>

  </Dialog>
)

const TriggerClass = 'flex items-center space-x-3'

const TriggerIconClass = 'size-6'
