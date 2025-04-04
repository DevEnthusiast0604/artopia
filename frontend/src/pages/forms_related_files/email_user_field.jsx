import React from 'react';
import { useForm, Controller } from "react-hook-form";

const UsermailField = (props) => {
  const { control } = props;

  return (
    <Controller
      name="username"
      control={control}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <input
            onChange={onChange}
            value={value}
            required
            id="username"
            type="text"
            name="username"
            placeholder='Type in your email or username.'
          />
          {/* Displaying helper text/error message */}
        </>
      )}
    />
  );
};

export default UsermailField;
