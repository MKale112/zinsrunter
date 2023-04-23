import { Checkbox, FormControl } from '@chakra-ui/react';
import { FieldProps, useFormikContext } from 'formik';
import React, { FC, useEffect } from 'react';
import CustomErrorMessage from './CustomErrorMessage';

export interface Props extends FieldProps {
  label: string | React.ReactElement;
  value?: string;
}

const CheckboxField: FC<Props> = ({ label, value, field }) => {
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
    <FormControl>
      <Checkbox {...field} value={value} isChecked={value ? true : false}>
        {label}
      </Checkbox>
      <CustomErrorMessage name={field.name} />
    </FormControl>
  );
};

export default CheckboxField;
