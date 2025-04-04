import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';



const PasswordField2 = ({ control }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const iconButtonStyle = {
    position: 'absolute',
    marginLeft: '-50px'
  };

  return (
    
    <div>
      <Controller
        name='password2'
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <div className="password-field">
              <input
                id="password2"
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => onChange(e.target.value)}
                value={value}
                placeholder="Confirm password"
                className="password-input"
              />
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                className="visibility-icon"
                style={iconButtonStyle}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
            {error && <FormHelperText error>{error.message}</FormHelperText>}
          </>
        )}
      />
    </div>
  );
};

export default PasswordField2;
