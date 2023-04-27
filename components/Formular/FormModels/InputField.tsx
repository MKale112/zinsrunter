import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { FieldProps, useField, useFormikContext } from 'formik';
import React, { FC, useEffect, useRef } from 'react';
import CustomErrorMessage from './CustomErrorMessage';

export interface Props extends FieldProps {
  placeholder?: string;
  label: string;
  width?: string;
  type?: string;
  isDisabled?: boolean;
  value?: string;
  maxDate?: string;
  minDate?: string;
}

const InputField: FC<Props> = ({
  placeholder = '',
  label,
  width,
  field,
  type = 'text',
  isDisabled = false,
  value,
  maxDate,
  minDate,
}) => {
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
    <FormControl ref={formControlRef} width={width} isInvalid={meta.touched && !!meta.error}>
      <FormLabel fontSize={14} mb={0}>
        {label}
      </FormLabel>
      <Input
        placeholder={placeholder}
        borderColor={meta.touched && !!meta.error ? 'red.500' : 'primary.acid'}
        border='2px'
        color='primary.blue'
        fontWeight='medium'
        {...field}
        value={value}
        disabled={isDisabled}
        _disabled={{ opacity: 1 }}
        cursor={isDisabled ? 'not-allowed' : 'auto'}
        _hover={{ opacity: 1 }}
        type={type}
        max={maxDate}
        min={minDate}
      />
      <CustomErrorMessage name={field.name} />
    </FormControl>
  );
};

export default InputField;
