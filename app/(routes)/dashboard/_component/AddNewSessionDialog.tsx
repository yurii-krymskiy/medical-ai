"use client";
import React, { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { DialogClose } from '@radix-ui/react-dialog'
import { ArrowRightIcon } from 'lucide-react'

const AddNewSessionDialog = () => {

  const [note, setNote] = useState<string>("");

  return (
    <Dialog>
      <DialogTrigger>
        <div className='mt-3 bg-[#09061d] text-white px-3 py-2 rounded-sm hover:opacity-85 transition-all'>
          + Start a consultation
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add basic details</DialogTitle>
          <DialogDescription asChild>
            <div>
              <h2>Add symptoms</h2>
              <Textarea
                placeholder='Add detail here...'
                className='h-[200px] mt-1'
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <div className='mt-3 bg-tranparent text-[#09061d] px-3 py-2 rounded-sm hover:opacity-85 transition-all border'>
              Cancel
            </div>
          </DialogClose>
          <div className='mt-3 bg-[#09061d] text-white px-3 py-2 rounded-sm hover:opacity-85 transition-all'>
            Next
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddNewSessionDialog
