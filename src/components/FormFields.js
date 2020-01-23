import React from 'react';
import { useField } from 'formik';
import Select from 'react-select';

export const MyTextField = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.name}>
                {label}
            </label>
            <input id={field.name} className="form-control" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </div>
    );
};

export const MySelect = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    // const { value } = meta;
    const { setValue } = helpers;
    return (
        <div className="form-group">
            <label htmlFor={props.name}>
                {label}
            </label>
            <Select
                inputId={props.name} // for label htmlFor reference
                options={props.options}
                name={field.name}
                value={props.options ? props.options.find(option => option.value === field.value) : ""}
                onChange={(option) => {
                    console.log(field.name, field.value, option);
                    setValue(option.value)
                }}
                onBlur={field.onBlur}
            />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </div>
    );
};