import React from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import FormErrorMsg from '../FormErrorMsg';
import { useQuery, useQueryClient } from 'react-query';

export default function Step1() {

    const navigate = useNavigate();
    const validationSchema = Yup.object({
        name: Yup.string().required('name Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        phone: Yup.string().required('phone Required'),
    })
    const querClient = useQueryClient();
    const { data: formData } = useQuery({
        queryKey: 'formData',
        enabled: false,
    })



    const handleSubmit = (values) => {
        console.log(values)
        querClient.setQueryData('formData', {
            ...formData,
            step1: { ...values }
        })
        navigate('/multi-step-form/step2')
    }


    return (
        <div className='w-full h-full flex flex-col gap-10'>

            <div className="r1 header">
                <h1 className="text-2xl font-bold">Personal info</h1>
                <p className="text-gray-400">Please provide your name, email address, and phone number.</p>
            </div>
            <Formik
                initialValues={formData.step1}
                onSubmit={handleSubmit}
                validateOnChange={true}
                validationSchema={validationSchema}>
                {
                    (formik) => {
                        console.log(formik)
                        return (
                            <Form className='r2 grow flex flex-col'>
                                <div className="form grow [&>.r]:flex [&>.r]:justify-between ">
                                    <div className="r r1">
                                        <label className='text-sm py-1' htmlFor="name">Name</label>
                                        <FormErrorMsg name='name' className="text-red-600" />
                                    </div>
                                    <Field type="text" name="name" id="name" className="w-full p-2 border-2 mb-2" placeholder="e.g Stephen King" />

                                    <div className="r r1">
                                        <label className='text-sm py-1' htmlFor="email">Email Adress</label>
                                        <FormErrorMsg name='email' className="text-red-600 " />
                                    </div>
                                    <Field type="text" name="email" id="email" className="w-full p-2 border-2 mb-2" placeholder="e.g stephenking@lorem.com" />
                                    <div className="r r1">
                                        <label className='text-sm py-1' htmlFor="phone">Phone Number</label>
                                        <FormErrorMsg name='phone' className="text-red-600" />
                                    </div>
                                    <Field type="text" name="phone" id="phone" className="w-full p-2 border-2 mb-2" placeholder="e.g +1 234 567 890" />
                                </div>

                                <div className="r3 nav w-full flex flex-row justify-around h-[60px]" >
                                    <button className='btn1 border-red-700  text-gray-600  hover:bg-gray-400/75 border border-2'
                                        disabled={true} onClick={() => { navigate(-1); }}>Go Back</button>
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
