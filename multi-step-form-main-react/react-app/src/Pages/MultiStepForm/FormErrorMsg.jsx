import React from 'react'
import { ErrorMessage } from 'formik';

export default function FormErrorMsg({ name, ...props }) {
    console.log(props)
    return (
        <ErrorMessage name={name} render={(msg) =>
            <span {...props}>
                {msg}
            </span>
        } />
    )
}
