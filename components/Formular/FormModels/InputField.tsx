import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { FieldProps } from 'formik';
import React, { FC } from 'react';
import CustomErrorMessage from './CustomErrorMessage';

export interface Props extends FieldProps {
  placeholder?: string;
  label: string;
  width?: string;
}

const InputField: FC<Props> = ({ placeholder = '', label, width, field }) => (
  <FormControl>
    <FormLabel fontSize={14} mb={0}>
      {label}:{' '}
    </FormLabel>
    <Input
      width={width}
      placeholder={placeholder}
      borderColor='primary.acid'
      border='2px'
      color='primary.blue'
      fontWeight='medium'
      {...field}
      // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      //   if (isNaN(Number(e.target.value))) {
      //     e.preventDefault();
      //   }
      // }}
    />
    <CustomErrorMessage name={field.name} />
  </FormControl>
);

export default InputField;
