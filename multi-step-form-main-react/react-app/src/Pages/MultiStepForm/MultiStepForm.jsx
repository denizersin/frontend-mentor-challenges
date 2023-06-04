import React from 'react'
import { useQuery } from 'react-query';
import { Outlet, useLocation } from 'react-router-dom'
import desktopSvg from "../../assets/bg-sidebar-desktop.svg"
import mobilesvg from "../../assets/bg-sidebar-mobile.svg"
import classNames from 'classnames';

export const addOns = [
    {
        id: 0,
        name: 'Online service',
        descripton: 'Accsess to multiplayer games',
        monthlyIncrement: 1,
        yearlyIncrement: 10,
    },
    {
        id: 1,
        name: 'Larger storage',
        descripton: 'Extra 1TB of cloud save',
        monthlyIncrement: 2,
        yearlyIncrement: 20,
    },
    {
        id: 2,
        name: 'Customaziable profile',
        descripton: 'Custom theme on your profile',
        monthlyIncrement: 2,
        yearlyIncrement: 20,
    },

]

export default function MultiStepForm() {
    const { pathname } = useLocation();

    const { data: formData } = useQuery({
        queryKey: 'formData',
        initialData: {
            step1: {
                name: '',
                email: '',
                phone: '',
            },
            step2: {
                type: 'arcade',//arcade,advanced,pro 
                duration: 'monthly',//monthly,yearly
            },
            step3: {
                addOns: []
            },
            step4: {}

        },
        enabled: false
    })

    console.log(formData)
    console.log('render')

    const isActive = (path) => pathname.includes(path) ? 'active' : '';
    return (
        <div className={'MultiStepForm component flex justify-center items-center w-full h-[100vh] max-sm:items-start bg-slate-200'}>
            <div className="container w-[900px] border h-[500px] bg-white max-sm:bg-transparent flex max-sm:items-center  max-sm:flex-col  max-sm:w-full max-sm:h-full rounded-lg p-3  max-sm:p-0">
                <div className="c1 nav shrink-0 relative overflow-hidden z-8 flex w-[220px] max-sm:w-full max-sm:h-[160px] rounded-lg max-sm:rounded-none max-sm:rounded-none   text-white">
                    <div className="nav-container relative z-10 w-full  flex flex-col gap-3 pl-6 pt-6 max-sm:pt-0 max-sm:pl-0  max-sm:flex-row max-sm:justify-center max-sm:mt-6">
                        <div className="r r1 flex gap-2 items-center max-sm:items-start">
                            <div className={classNames(`c c1 circle w-[30px] h-[30px] rounded-full border flex justify-center items-center  `, {
                                'bg-sky-200 text-black': pathname.includes('step1'),
                            })}><span>1</span></div>
                            <div className="c c2 flex flex-col items-start max-sm:hidden "><span className='text-gray-400 text-sm'>STEP 1</span>
                                <span className='font-bold text-sm' >YOUR INFO</span></div>
                        </div>

                        <div className="r r1 flex gap-2 items-center max-sm:items-start">
                            <div className={classNames(`c c1 circle w-[30px] h-[30px] rounded-full border flex justify-center items-center  `, {
                                'bg-sky-200 text-black': pathname.includes('step2'),
                            })}><span>2</span></div>
                            <div className="c c2 flex flex-col items-start max-sm:hidden "><span className='text-gray-400 text-sm'>STEP 2</span>
                                <span className='font-bold text-sm' >SELECT PLAN</span></div>
                        </div>


                        <div className="r r1 flex gap-2 items-center max-sm:items-start">
                            <div className={classNames(`c c1 circle w-[30px] h-[30px] rounded-full border flex justify-center items-center  `, {
                                'bg-sky-200 text-black': pathname.includes('step3'),
                            })}><span>3</span></div>
                            <div className="c c2 flex flex-col items-start max-sm:hidden "><span className='text-gray-400 text-sm'>STEP3</span>
                                <span className='font-bold text-sm' >ADD-ONS</span></div>
                        </div>

                        <div className="r r1 flex gap-2 items-center max-sm:items-start">
                            <div className={classNames(`c c1 circle w-[30px] h-[30px] rounded-full border flex justify-center items-center  `, {
                                'bg-sky-200 text-black': pathname.includes('step4'),
                            })}><span>4</span></div>
                            <div className="c c2 flex flex-col items-start max-sm:hidden "><span className='text-gray-400 text-sm'>STEP4</span>
                                <span className='font-bold text-sm' >SUMMARY</span></div>
                        </div>

                        

                    </div>
                    <img src={desktopSvg} className='absolute w-full z-0 max-sm:hidden' alt="" />
                    <img src={mobilesvg} className='absolute w-full z-0 hidden max-sm:block' alt="" />


                </div>
                <div className="c2 content bg-white grow flex max-sm:w-[90%] justify-center items-center max-sm:bg-slate-200">
                    <div className="container w-[80%] max-sm:w-full h-full p-4 py-6 rounded-lg  bg-white max-sm:translate-y-[-70px]">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>

    )
}
