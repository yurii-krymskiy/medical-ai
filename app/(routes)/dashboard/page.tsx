import React from 'react'
import HistoryList from './_component/HistoryList'
import { Button } from '@/components/ui/button'
import DoctorsAgentList from './_component/DoctorsAgentList'

const Dashboard = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl'>
          My Dashboard
        </h2>
        <Button>Consult with doctor</Button>
      </div>
      <HistoryList />
      <DoctorsAgentList />
    </div>
  )
}

export default Dashboard
