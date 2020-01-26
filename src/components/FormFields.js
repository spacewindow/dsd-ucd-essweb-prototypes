import React from 'react';
import { useField } from 'formik';
import Select from 'react-select';
import classNames from 'classnames';

export const MyTextField = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.name}>
                {label}
            </label>
            <input id={field.name} className="form-control" {...field} {...props} />
            {meta.error && meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </div>
    );
};

export const MySelect = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);

    const { setValue } = helpers;
    // console.log("META", meta)
    console.log("CHILDFIELD", props.setValues);
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
                    // console.log(field.name, field.value, option);
                    setValue(option.value)
                    if (props.child && option.value !== props.child.parentValue) {
                        props.child.reset()
                    }
                }}
                onBlur={field.onBlur}
            />

            {meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </div>
    );
};

// Input feedback
const InputFeedback = ({ error }) =>
    error ? <div className={classNames("input-feedback")}>{error}</div> : null;


// Radio input
export const RadioButton = ({
    field: { name, value, onChange, onBlur },
    id,
    label,
    className,
    ...props
}) => {
    return (
        <div>
            <input
                name={name}
                id={id}
                type="radio"
                value={id} // could be something else for output?
                checked={id === value}
                onChange={onChange}
                onBlur={onBlur}
                className={classNames("radio-button")}
                {...props}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};



// Radio group
export const RadioButtonGroup = ({
    value,
    error,
    touched,
    id,
    label,
    className,
    children
}) => {
    const classes = classNames(
        "input-field",
        {
            "is-success": value || (!error && touched), // handle prefilled or user-filled
            "is-error": !!error && touched
        },
        className
    );

    return (
        <div className={classes}>
            <fieldset>
                <label>{label}</label>
                {children}
                {error && <InputFeedback error={error} />}
            </fieldset>
        </div>
    );
};