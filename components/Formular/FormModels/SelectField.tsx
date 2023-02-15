import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import { FieldProps } from 'formik';
import React, { FC } from 'react';
import CustomErrorMessage from './CustomErrorMessage';

export interface Props extends FieldProps {
  label: string;
  options?: string[];
  placeholder?: string;
}

const SelectField: FC<Props> = ({ label, options, placeholder = 'Please select one', field }) => (
  <FormControl>
    <FormLabel fontSize={14} mb={0}>
      {label}:
    </FormLabel>

    {options && (
      <Select
        {...field}
        placeholder={placeholder}
        borderColor='primary.acid'
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

export default SelectField;
