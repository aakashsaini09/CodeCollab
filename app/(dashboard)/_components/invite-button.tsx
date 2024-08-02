import React from 'react'
import { Plus } from 'lucide-react'
import { OrganizationProfile } from '@clerk/nextjs'
import { Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className='px-2 py-2'>
            <Plus className='h-3 w-3 mr-2'/>
            Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className='p-0 bg-transparent border-none max-w-[880px]'>
        <OrganizationProfile/>
      </DialogContent>
    </Dialog>
  )
}

export default InviteButton
