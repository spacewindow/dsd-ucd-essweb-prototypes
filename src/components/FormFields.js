import React from 'react';
import { useField } from 'formik';
import ReactSelect from 'react-select';
import classNames from 'classnames';

export const TextField = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (

        <div className={meta.error ? "form-group form-group-error" : "form-group"}>
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

export const Select = props => {
    const [field, meta, helpers] = useField(props);
    return (
        <div className={meta.error ? "form-group form-group-error" : "form-group"}>
            <label htmlFor={props.name}>
                {props.label}
            </label>
            <ReactSelect
                inputId={props.name} // for label htmlFor reference
                options={props.options}
                name={field.name}
                value={props.options ? props.options.find(option => option.value === field.value) : ""}
                onChange={(option) => {
                    helpers.setValue(option.value)
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
const InputFeedback = (props) =>
    props.error ? <div className={classNames("input-feedback")}>{props.error}</div> : null;


// Radio input
export const RadioButton = props => {
    const [field, meta, helpers] = useField(props);
    return (
        <div>
            <input
                type="radio"
                name={field.name}
                id={props.id}
                value={props.value}
                checked={field.checked}
                onChange={() => {
                    helpers.setValue(props.id)
                }}
            />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
};



// Radio group
export const RadioButtonGroup = props => {
    const [field, meta, helpers] = useField(props);
    let element = (
        <div className={meta.error ? "form-group form-group-error" : "form-group"}>
            <fieldset>
                <label>{props.label}</label>
                {props.children}
                {meta.error && <InputFeedback error={meta.error} />}
            </fieldset>
        </div>
    )
    if (props.parent) {
        element = props.parent.currentValue !== props.parent.triggerValue ? null : element
    }
    return (
        element
    );
};