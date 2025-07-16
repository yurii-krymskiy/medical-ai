import React from 'react'

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const createNewUser = () => {

  }

  return (
    <div>
      {children}
    </div>
  )
}

export default Provider
