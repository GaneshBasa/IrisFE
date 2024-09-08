import { FC } from 'react'
import {
  MdOutlineFeedback as FeedbackIcon,
  MdOutlinedFlag as ReportIcon,
  MdLightbulbOutline as IdeaIcon
} from 'react-icons/md'

import { Button } from '@ui/button'
import { ActionContainer, Action } from '@components/feedback/action'
import {
  Sheet,
  SheetPortal,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription
} from '@ui/sheet'


export const Feedback : FC = () => (
  <Sheet>

    <SheetTrigger asChild>
      <Button variant='ghost' size='icon' className='bg-transparent'>
        <FeedbackIcon className='size-6' />
      </Button>
    </SheetTrigger>

    <SheetPortal>
      <SheetContent>

        <SheetHeader>
          <SheetTitle>
            Send Feedback
          </SheetTitle>
          <SheetDescription>
            Send feedback about the app
          </SheetDescription>
        </SheetHeader>

        <ActionContainer>

          <Action
            icon={ <ReportIcon className={ ActionIconClass } /> }
            text='Report an issue'
          />

          <Action
            icon={ <IdeaIcon className={ ActionIconClass } /> }
            text='Suggest an idea'
          />

        </ActionContainer>

      </SheetContent>
    </SheetPortal>

  </Sheet>
)


const ActionIconClass = 'size-5'
