import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import MultiStepForm from './Pages/MultiStepForm/MultiStepForm'
import Step1 from './Pages/MultiStepForm/Step1/Step1'
import Step2 from './Pages/MultiStepForm/Step2/Step2'
import Step3 from './Pages/MultiStepForm/Step3/Step3'
import Step4 from './Pages/MultiStepForm/Step4/Step4'
import Success from './Pages/MultiStepForm/Success'

import classNames from 'classnames'
export const cs = classNames

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/multi-step-form/step1')
  }, []);
  return (
    <Routes>
      <Route path='/multi-step-form' element={<MultiStepForm />}>
        <Route path='step1' element={<Step1 />} />
        <Route path='step2' element={<Step2 />} />
        <Route path='step3' element={<Step3 />} />
        <Route path='step4' element={<Step4 />} />
        <Route path='step4-success' element={<Success />} />
      </Route>
    </Routes>
  )
}

export default App
