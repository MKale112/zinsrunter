import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import { FieldProps, useField } from 'formik';
import React, { FC, useEffect, useRef } from 'react';
import CustomErrorMessage from './CustomErrorMessage';

export interface Props extends FieldProps {
  placeholder?: string;
  label: string;
  width?: string;
}

const TextAreaField: FC<Props> = ({ placeholder = '', label, width, field }) => {
  const [_formikField, meta] = useField(field);
  const formControlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (meta.touched && !!meta.error && formControlRef.current) {
      formControlRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [meta.error, meta.touched]);

  return (
    <FormControl isInvalid={meta.touched && !!meta.error}>
      <FormLabel fontSize={14} mb={0}>
        {label}
      </FormLabel>
      <Textarea
        width={width}
        placeholder={placeholder}
        borderColor={meta.touched && !!meta.error ? 'red.500' : 'primary.acid'}
        border='2px'
        color='primary.blue'
        fontWeight='medium'
        {...field}
      />
      <CustomErrorMessage name={field.name} />
    </FormControl>
  );
};

export default TextAreaField;
