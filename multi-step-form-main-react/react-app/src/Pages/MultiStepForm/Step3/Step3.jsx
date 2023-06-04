import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik';
import { useQuery, useQueryClient } from 'react-query';
import checkedSvg from "../../../assets/icon-checkmark.svg"

import { addOns } from '../MultiStepForm';
import { cs } from '../../../App';

// import img from "@/src/assets/image.png"
addOns
console.log(addOns)



export default function Step3() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const querClient = useQueryClient();
    const { data: formData } = useQuery({
        queryKey: 'formData',
        enabled: false,
    })

    const isMonthly = formData.step2.duration === 'monthly';

    const handleSubmit = (values) => {
        console.log(values)
        querClient.setQueryData('formData', {
            ...formData,
            step3: { ...values }
        })
        navigate('/multi-step-form/step4')
    }


    console.log(formData)

    return (
        <div className='w-full h-full flex flex-col gap-10'>

            <div className="r1 header">
                <h1 className="text-2xl font-bold"> Pick add-ons</h1>
                <p className="text-gray-400">Add-ons help enhance your gaming experience.</p>
            </div>
            <Formik
                initialValues={formData.step3}
                onSubmit={handleSubmit}
                validateOnChange={true}>
                {
                    (formik) => {
                        console.log(formik)
                        return (
                            <Form className='r2 grow flex flex-col'>
                                <div className="r1 grow flex flex-col gap-3">
                                    {
                                        addOns.map((addOn, index) => {

                                            const isSelected = formik.values.addOns.includes(addOn.id);
                                            const handleSelect = () => {
                                                const isSelected = formik.values.addOns.includes(addOn.id);
                                                if (isSelected) {
                                                    formik.setFieldValue('addOns', formik.values.addOns.filter((id) => id !== addOn.id))
                                                } else {
                                                    formik.setFieldValue('addOns', [...formik.values.addOns, addOn.id])
                                                }
                                            }
                                            return (
                                                <div onClick={handleSelect} key={index} className={
                                                    cs("r1 flex rounded-lg items-center border-2 gap-2 p-4 cursor-pointer", { "border-purple-900": isSelected })
                                                }>
                                                    <div className={cs("c c1 check w-6 h-6 border flex justify-center items-center rounded-md",
                                                        { "bg-purple-600": isSelected }
                                                    )}>
                                                        <img src={checkedSvg} className='w-4' alt="" />
                                                    </div>
                                                    <div className="c c2 flex grow flex-col text-sm">
                                                        <span className=' font-bold'>{addOn.name}</span>
                                                        <span className='text-gray-500'>{addOn.descripton}</span>
                                                    </div>
                                                    <div className="c c3 w-max h-max">
                                                        +{isMonthly ? addOn.monthlyIncrement + '/mo' : addOn.yearlyIncrement + '/yr'}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <div className="r2 nav w-full flex flex-row justify-around h-[60px]" >
                                    <button
                                        onClick={() => { navigate('/multi-step-form/step2'); }}
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


