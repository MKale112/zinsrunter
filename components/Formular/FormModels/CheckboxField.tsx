import { Checkbox, FormControl } from '@chakra-ui/react';
import { FieldProps } from 'formik';
import React, { FC } from 'react';
import CustomErrorMessage from './CustomErrorMessage';

export interface Props extends FieldProps {
  label: string | React.ReactElement;
  value?: string;
}

const CheckboxField: FC<Props> = ({ label, value, field }) => (
  <FormControl>
    <Checkbox {...field} value={value} isChecked={value ? true : false}>
      {label}
    </Checkbox>
    <CustomErrorMessage name={field.name} />
  </FormControl>
);
export default CheckboxField;
