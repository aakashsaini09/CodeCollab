import Image from 'next/image'
import React from 'react'
import image from '../../../elements/draw.png'
import { CreateOrganization } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
const EmptyOrg = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Image src={image} width={400} height={400} alt='Empty Org' />
      <h2 className='text-2xl font-semibold mt-6'>Welcome to Board</h2>
      <p className="mt-2 text-muted-foreground text-sm">Create an organization to get started</p>
      <div className="mt-6">
        <Dialog>
        <DialogTrigger asChild>
            <Button className='bg-black text-white hover:text-black hover:bg-white hover:border-2 hover:border-black' size="lg">Create organization</Button>
        </DialogTrigger>
        <DialogContent className='p-0 bg-transparent border-non max-w-[480px]'><CreateOrganization/></DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default EmptyOrg
