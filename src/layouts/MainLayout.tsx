import React from 'react'

interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col items-center justify-center px-4 py-8 text-gray-300 bg-gray-900 App'>
      {children}
    </div>
  )
}

export default MainLayout
