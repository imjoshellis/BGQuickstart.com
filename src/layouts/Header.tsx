import React from 'react'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <h1 className='text-4xl font-bold text-gray-200 '>BG QuickStart</h1>
      <h2 className='mb-6 text-sm text-gray-500'>
        Built by{' '}
        <a
          className='text-gray-500 underline transition duration-500 ease-out hover:text-gray-300'
          href='https://github.com/imjoshellis'
          target='_blank'
          rel='noopener noreferrer'
        >
          @imjoshellis
        </a>
      </h2>
    </>
  )
}

export default Header
