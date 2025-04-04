import React from 'react';
import { useForm, Controller } from "react-hook-form";

const EmailField = (props) => {
  const { control } = props;
  

  return (
    <Controller
      name="email"
      control={control}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <input
            onChange={onChange}
            value={value}
            required
            id="email"
            type="email"
            name="email"
            placeholder='Type in your email'
          />
          {/* Displaying helper text/error message */}
          {error? <p style={{ color: 'red',  fontSize: '12px', marginTop: '-10px', marginLeft: '90px' }}>{error.message}</p> : null}

        </>
      )}
    />
  );
};

export default EmailField;
