import React from 'react'
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { useQuery } from 'react-query';
import { plans } from '../Step2/Step2';
import { addOns } from '../MultiStepForm';





export default function Step4() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { data: formData } = useQuery({
        queryKey: 'formData',
        enabled: false,
    })

    const isMonthly = formData.step2.duration === 'monthly';
    const selectedPlan = plans.find(plan => plan.name === formData.step2.type);
    const selectedPlanPrice = isMonthly ? selectedPlan.monthPrice : selectedPlan.yearPrice;
    const selectedAddOns = addOns.filter(addOn => formData.step3.addOns.includes(addOn.id))
    const addOnsPrice = selectedAddOns.reduce((acc, addOn) => acc + (isMonthly ? addOn.monthlyIncrement : addOn.yearlyIncrement), 0);
    console.log(addOnsPrice)
    const totalPrice = selectedPlanPrice + addOnsPrice;
    console.log(formData)

    return (
        <div className='w-full h-full flex flex-col '>

            <div className="r1 header ">
                <h1 className="text-2xl font-bold">Finishing up</h1>
                <p className="text-gray-400">Double-check everything looks OK before confirming..</p>
            </div>
            <div className="r2 flex flex-col grow mt-10">
                <div className="r2 p-3 border bg-gray-100" >
                    <div className="r1 flex py-3 border-b-2">
                        <div className="c1 grow flex flex-col">
                            <span>{selectedPlan.name}({isMonthly ? 'Monthly' : 'Yearly'})</span>
                            <Link to="/multi-step-form/step2" className="text-gray-500 underline">Change</Link>
                        </div>
                        <div className="c2 w-max  flex items-center ">
                            $<span>{selectedPlanPrice + `/${isMonthly ? 'mo' : 'yr'}`}</span>
                        </div>
                    </div>
                    <div className="r2 flex flex-col gap-2 py-3 text-gray-500">
                        {
                            selectedAddOns.map(addOn => (
                                <div className="r1 flex">
                                    <span className='grow'>{addOn.name}</span>
                                    <span>+${(isMonthly ? addOn.monthlyIncrement : addOn.yearlyIncrement) + `/${isMonthly ? 'mo' : 'yr'}`}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="r3 p-3 flex bg-white " >
                    <span className='grow text-gray-500'>Total ({isMonthly ? 'per month' : 'per year'})</span>
                    <span className='text-purple-500 font-bold text-lg'>{'$' + totalPrice + '/' + (isMonthly ? 'mo' : 'yr')}</span>
                </div>
            </div>

            <div className="r2 nav w-full flex flex-row justify-around h-[60px]" >
                <button
                    onClick={() => { navigate('/multi-step-form/step3'); }}
                    className='btn1 border-red-700  text-gray-600  hover:bg-gray-400/75 border border-2'
                    disabled={pathname.includes('step1')}>Go Back</button>
                <button className='btn1 text-white bg-gray-800'
                    onClick={() => {
                        navigate('/multi-step-form/step4-success')
                    }}
                >Confirm</button>

            </div>
        </div>
    )
}

