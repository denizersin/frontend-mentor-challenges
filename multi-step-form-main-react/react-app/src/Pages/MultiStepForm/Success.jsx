import React from 'react'
import thankyouSvg from "../../assets/icon-thank-you.svg"

export default function Success() {
    return (
        <div className={'Success component w-full h-full flex flex-col items-center justify-center gap-3'}>
            <div className="r r1 w-16 h-16 max-sm:w-12 max-sm:h-12 border ">
                <img src={thankyouSvg} alt="" />
            </div>
            <div className="r r2">
                <h1 className='text-2xl font-bold'>Thank you!</h1>
            </div>
            <div className="r r3 tex-sm text-gray-500">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
            </div>
        </div>
    )
}
