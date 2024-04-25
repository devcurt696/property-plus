import React from 'react'
import { ClipLoader } from 'react-spinners'

const override = {
    display: 'block',
    margin: '100px auto',
}

const LoadingPage = () => {
  return (
    <ClipLoader
        color='#3b82f6'
        loading={true}
        size={150}
        cssOverride={override}
        aria-label='Loading...'
        data-testid='loading'
    />
  )
}

export default LoadingPage