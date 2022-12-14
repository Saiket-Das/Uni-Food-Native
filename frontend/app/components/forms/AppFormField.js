import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../common/AppTextInput";
import ErrorMessage from "./ErrorMessage";

export default function AppFormField({ name, ...otherProps }) {
  const { values, touched, errors, setFieldValue, setFieldTouched } =
    useFormikContext();

  console.log();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChange={(text) => setFieldValue(name, text)}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
