import React from 'react';
import { useForm, Controller } from "react-hook-form";

const UsernameField = (props) => {
  const { control } = props;
  

  return (
    <Controller
      name="username"
      control={control}
      defaultValue=""
      rules={{ required: 'Username is required' }} // Custom validation message
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <input
            onChange={onChange}
            value={value}
            required
            id="username"
            type ="text"
            name="username"
            placeholder='Type in your username'
          />
          {/* Displaying helper text/error message */}
          {error? <p style={{ color: 'red',  fontSize: '12px', marginTop: '-10px', marginLeft: '90px' }}>{error.message}</p> : null}
        </>
      )}
    />
  );
};

export default UsernameField;
