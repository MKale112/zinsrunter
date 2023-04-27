import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import { FieldProps, useField, useFormikContext } from 'formik';
import React, { FC, useEffect, useRef } from 'react';
import CustomErrorMessage from './CustomErrorMessage';

export interface Props extends FieldProps {
  label: string;
  options?: string[];
  placeholder?: string;
  defaultValue?: string;
  value?: string;
}

const SelectField: FC<Props> = ({ label, options, value, placeholder = 'Please select one', defaultValue, field }) => {
  const [_formikField, meta] = useField(field);
  const formControlRef = useRef<HTMLDivElement>(null);

  const formik = useFormikContext();
  useEffect(() => {
    if (!formik?.isValidating && formik?.errors && Object.keys(formik?.errors).length > 0) {
      const firstErrorField = Object.keys(formik?.errors)[0];
      const errorFieldElement = document.getElementsByName(firstErrorField)[0];
      if (errorFieldElement) {
        errorFieldElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [formik?.isValidating, formik?.errors]);

  return (
    <FormControl ref={formControlRef} isInvalid={meta.touched && !!meta.error}>
      <FormLabel fontSize={14} mb={0}>
        {label}
      </FormLabel>

      {options && (
        <Select
          {...field}
          value={value}
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
