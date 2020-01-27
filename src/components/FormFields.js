import React, { useEffect } from "react";
import { useField } from "formik";
import ReactSelect from "react-select";
import classNames from "classnames";

export const TextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className={meta.error ? "form-group form-group-error" : "form-group"}>
      <label htmlFor={props.name}>{label}</label>
      <input id={field.name} className="form-control" {...field} {...props} />
      {meta.error && meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const Select = props => {
  const [field, meta, helpers] = useField(props);
  const options = props.options.map(x => ({ label: x, value: x }));

  let element = (
    <div className={meta.error ? "form-group form-group-error" : "form-group"}>
      <label htmlFor={props.name}>{props.label}</label>
      <ReactSelect
        inputId={field.name} // for label htmlFor reference
        options={options}
        name={field.name}
        onChange={option => {
          helpers.setValue(option.value);
        }}
        onBlur={field.onBlur}
      />

      {meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  );

  // render based on parent value
  if (props.parent && props.parent.toggle === "render") {
    var match = props.parent.toggleValues.filter(value => {
      return value === props.parent.currentValue;
    });
    console.log(props.name + " match", match);

    element = match.length > 0 ? element : null;
  }
  return element;
};

// Input feedback
const InputFeedback = props =>
  props.error ? (
    <div className={classNames("input-feedback")}>{props.error}</div>
  ) : null;

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
          helpers.setValue(props.id);
        }}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

// Radio group
export const RadioButtonGroup = props => {
  const [field, meta, helpers] = useField(props);

  useEffect(() => {
    // wipes the value on the component if parent changes value
    if (
      props.parent &&
      props.parent.currentValue !== props.parent.toggleValues
    ) {
      helpers.setValue(undefined);
    }
  }, [props.parent.currentValue]); // currentValue dependency critical to avoid infinite loop

  let element = (
    <div className={meta.error ? "form-group form-group-error" : "form-group"}>
      <fieldset>
        <label>{props.label}</label>
        {props.options.map((o, i) => (
          <RadioButton name={props.name} id={o} label={o} key={"radio" + i} />
        ))}
        {meta.error && <InputFeedback error={meta.error} />}
      </fieldset>
    </div>
  );
  // render based on parent value
  if (props.parent && props.parent.toggle === "render") {
    var match = props.parent.toggleValues.filter(value => {
      return value === props.parent.currentValue;
    });
    console.log(props.name + " match", match);

    element = match.length > 0 ? element : null;
  }
  return element;
};
