import { Button } from '@/components/ui/button'
import { IconArrowRight } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

type Doctor = {
  id: number,
  specialist: string,
  description: string,
  image: string,
  agentPrompt: string,
  voiceId: string,
  subscriptionRequired: boolean,
}

const DoctorAgentCard = ({ doc }: { doc: Doctor }) => {
  return (
    <div className=''>
      <Image
        src={doc.image}
        alt={doc.image}
        width={200}
        height={300}
        className='w-full h-[250px] object-cover rounded-[5px]'
      />
      <h2 className='font-bold mt-1'>
        {doc.specialist}
      </h2>
      <p className='line-clamp-2 mt-1 text-sm text-gray-500'>{doc.description}</p>
      <Button className='w-full mt-2'>Start consultation <IconArrowRight /> </Button>
    </div>
  )
}

export default DoctorAgentCard
