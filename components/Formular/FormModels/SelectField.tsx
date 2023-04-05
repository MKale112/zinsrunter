import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import { FieldProps, useField } from 'formik';
import React, { FC, useEffect, useRef } from 'react';
import CustomErrorMessage from './CustomErrorMessage';

export interface Props extends FieldProps {
  label: string;
  options?: string[];
  placeholder?: string;
}

const SelectField: FC<Props> = ({ label, options, placeholder = 'Please select one', field }) => {
  const [_formikField, meta] = useField(field);
  const formControlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (meta.touched && !!meta.error && formControlRef.current) {
      formControlRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [meta.error, meta.touched]);

  return (
    <FormControl ref={formControlRef} isInvalid={meta.touched && !!meta.error}>
      <FormLabel fontSize={14} mb={0}>
        {label}
      </FormLabel>

      {options && (
        <Select
          {...field}
          placeholder={placeholder}
          borderColor={meta.touched && !!meta.error ? 'red.500' : 'primary.acid'}
          border='2px'
          color='primary.blue'
          fontWeight='medium'
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </Select>
      )}

      <CustomErrorMessage name={field.name} />
    </FormControl>
  );
};

export default SelectField;
