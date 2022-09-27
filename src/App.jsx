import React from 'react'
import UserInputs from './Components/UserInputs'
import FeaturesDis from './Components/FeaturesDis'
import { UserProvider } from './Components/UserContext'

export default function App() {



  return (
    <UserProvider>
      <div className="px-4 py-1 my-5 text-center">
        <h1 className="display-5 fw-bold"> DnD Feature Helper</h1>
        <h5 className='px-4 py-4'> Insert your level and class to obtain your feature list</h5>
      </div>
      <div className='row'>
        <div className='container col-4'>
          <UserInputs />
        </div>
        <div className='container col-8'>
          <FeaturesDis />
        </div>
      </div>
    </UserProvider >
  )
}

