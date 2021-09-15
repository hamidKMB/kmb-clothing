import React from "react";

import { Group, FormInputHolder, FormInputLabel } from "./form-input.styles";

const FormInput = ({ label, handleChange, ...props }) => {
  return (
    <Group>
      <FormInputHolder onChange={handleChange} {...props} />
      {label ? (
        <FormInputLabel className={props.value.length ? "shrink" : ""}>
          {label}
        </FormInputLabel>
      ) : null}
    </Group>
  );
};

export default FormInput;
