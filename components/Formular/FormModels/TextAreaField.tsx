import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import { FieldProps } from 'formik';
import React, { FC } from 'react';
import CustomErrorMessage from './CustomErrorMessage';

export interface Props extends FieldProps {
  placeholder?: string;
  label: string;
  width?: string;
}

const TextAreaField: FC<Props> = ({ placeholder = '', label, width, field }) => (
  <FormControl>
    <FormLabel fontSize={14} mb={0}>
      {label}:
    </FormLabel>
    <Textarea
      width={width}
      placeholder={placeholder}
      borderColor='primary.acid'
      border='2px'
      color='primary.blue'
      fontWeight='medium'
      {...field}
    />
    <CustomErrorMessage name={field.name} />
  </FormControl>
);

export default TextAreaField;
