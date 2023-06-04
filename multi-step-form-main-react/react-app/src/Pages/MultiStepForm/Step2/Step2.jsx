import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik';
import FormErrorMsg from '../FormErrorMsg';
import { useQuery, useQueryClient } from 'react-query';
import SwitchDemo from '../../components/Switch';
import arcadeSvg from "../../../assets/icon-arcade.svg"
import advancedSvg from "../../../assets/icon-advanced.svg"
import proSvg from "../../../assets/icon-pro.svg"
import { cs } from '../../../App';
export const plans = [
    {
        name: 'arcade',
        monthPrice: 9,
        yearPrice: 90,
        iconSrc: arcadeSvg
    },
    {
        name: 'advanced',
        monthPrice: 12,
        yearPrice: 120,
        iconSrc: advancedSvg
    },
    {
        name: 'pro',
        monthPrice: 15,
        yearPrice: 150,
        iconSrc: proSvg
    }
]



export default function Step2() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const querClient = useQueryClient();
    const { data: formData } = useQuery({
        queryKey: 'formData',
        enabled: false,
    })



    const handleSubmit = (values) => {
        console.log(values)
        querClient.setQueryData('formData', {
            ...formData,
            step2: { ...values }
        })
        navigate('/multi-step-form/step3')
    }

    console.log(formData)

    return (
        <div className='w-full h-full flex flex-col '>

            <div className="r1 header mb-10">
                <h1 className="text-2xl font-bold">Select your plan</h1>
                <p className="text-gray-400">you have the option of monthly or yearly billing.</p>
            </div>
            <Formik
                initialValues={formData.step2}
                onSubmit={handleSubmit}
                validateOnChange={true}>
                {
                    (formik) => {
                        const selectedDuration = formik.values.duration;
                        console.log(formik)
                        return (
                            <Form className='r2 grow flex flex-col'>
                                <div className="r1 grow flex flex-col  ">
                                    <div className="plan flex mb-3 max-sm:flex-col max-sm:items-center gap-3">
                                        {
                                            plans.map((plan, index) => {
                                                const selectedPlan = formik.values.type;
                                                const isSelected = plan.name === selectedPlan;
                                                return (
                                                    <div key={index}
                                                        onClick={() => { formik.setFieldValue('type', plan.name) }}
                                                        className={cs(`plan-card flex flex-col w-[120px] p-3 rounded-lg border-2 cursor-pointer max-sm:flex-row max-sm:w-full max-sm:gap-4`,
                                                            { 'border-black': isSelected }
                                                        )}>
                                                        <div className="c1 h-16">
                                                            <img src={plan.iconSrc} className='w-8 h-8 mb-4' alt="" />
                                                        </div>
                                                        <div className="c2">
                                                            <h5 className=''>{plan.name}</h5>
                                                            <p className='text-gray-400'>${selectedDuration === 'monthly' ? plan.monthPrice + '/mo' : plan.yearPrice + '/yr'}</p>
                                                            <span className='text-[12px]'>{selectedDuration == 'yearly' && "2 month free"}</span>
                                                        </div>
                                                    </div>

                                                )
                                            })
                                        }
                                    </div>

                                    <SwitchDemo name="duration" />
                                </div>

                                <div className="r2  nav w-full flex flex-row justify-around h-[60px]" >
                                    <button
                                        onClick={() => { navigate('/multi-step-form/step1'); }}
                                        className='btn1 border-red-700  text-gray-600  hover:bg-gray-400/75 border border-2'
                                        disabled={pathname.includes('step1')}>Go Back</button>
                                    <button className='btn1 text-white bg-gray-800' type='submit' >Next Step</button>

                                </div>
                            </Form>
                        )
                    }
                }

            </Formik>
        </div>
    )
}




<div className="r3 nav w-full flex flex-row justify-around h-[60px]" >
    <button className='btn1 border-red-700  text-gray-600  hover:bg-gray-400/75 border border-2'
        disabled={true} onClick={() => { navigate(-1); }}>back</button>
    <button className='btn1 text-white bg-gray-800' type='submit' >next</button>
</div>