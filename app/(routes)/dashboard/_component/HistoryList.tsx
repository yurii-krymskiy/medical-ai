"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react'

const HistoryList = () => {
  const [historyList, setHistoryList] = useState([]);
  return (
    <div className='mt-10'>
      {historyList.length === 0 ?
        (
          <div className='flex items-center flex-col justify-center p-7 border border-dashed rounded-2xl'>
            <Image
              src="/medical-assistance.png"
              alt="empty"
              width={150}
              height={150}
            />
            <h2 className='font-bold text-xl mt-5'>
              No Recent Consultations
            </h2>
            <p className='mt-2'>It looks like you haven&apos;t cinsulted with any doctors yet.</p>
            <Button className='mt-3'>
              + Start a consultation
            </Button>
          </div>
        ) : (
          <div>
          </div>
        )}
    </div>
  )
}

export default HistoryList
