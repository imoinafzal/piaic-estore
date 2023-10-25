import React, { FC } from 'react'

const Wrapper:FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className='max-w-7xl mx-auto px-6 min-h-screen'>
        {children}
    </div>
  )
}

export default Wrapper