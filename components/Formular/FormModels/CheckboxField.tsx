import { Checkbox, FormControl } from '@chakra-ui/react';
import { FieldProps } from 'formik';
import React, { FC } from 'react';

export interface Props extends FieldProps {
  label: string;
}

const CheckboxField: FC<Props> = ({ label, field }) => (
  <FormControl>
    <Checkbox {...field}>{label}</Checkbox>
  </FormControl>
);
export default CheckboxField;
