import { AIDoctorAgents } from '@/shared/list'
import React from 'react'
import DoctorAgentCard from './DoctorAgentCard'

const DoctorsAgentList = () => {
  return (
    <div className='mt-10'>
      <h2 className='font-bold text-xl'>
        Ai specialists doctors agent
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-5'>
        {AIDoctorAgents.map((doc, index) => (
          <div key={index}>
            <DoctorAgentCard doc={doc} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorsAgentList
