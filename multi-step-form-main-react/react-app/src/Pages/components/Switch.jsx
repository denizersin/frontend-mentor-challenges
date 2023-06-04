import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import { useField } from 'formik';
import { cs } from '../../App';

const SwitchDemo = (props) => {

    const [field, meta, helpers] = useField(props.name);
    console.log(field.value, '123')
    return (
        <div className='flex items-center justify-center bg-gray-100 py-1 cursor-pointer'>
            <div className="flex">
                <label className={
                    cs("Label text-gray-400  w-20 flex justify-center items-center", {
                        "!text-blue-950  font-bold": field.value === 'monthly'
                    })
                } htmlFor="airplane-mode" >
                    Monthly
                </label>
                <Switch.Root onCheckedChange={(checked) => {
                    helpers.setValue(checked ? 'yearly' : 'monthly')
                }} className="SwitchRoot" id="airplane-mode">
                    <Switch.Thumb className="SwitchThumb" />
                </Switch.Root>
                <label className={
                    cs(
                        {
                            "!text-blue-950   font-bold": field.value === 'yearly'
                        }
                        , "Label text-gray-400  w-20 flex justify-center items-center")
                } htmlFor="airplane-mode" >
                    Yearly
                </label>
            </div>
        </div>
    );
}
export default SwitchDemo;