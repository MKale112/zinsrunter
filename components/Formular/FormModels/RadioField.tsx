import { FormControl, FormLabel, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { FieldProps, useFormikContext } from 'formik';
import React, { FC, useEffect } from 'react';
import CustomErrorMessage from './CustomErrorMessage';

interface Props extends FieldProps {
  label: string;
  name: string;
}

const RadioField: FC<Props> = ({ label, name, field }) => {
  const { onChange, ...rest } = field;

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
    <FormControl mb='5'>
      <FormLabel fontSize={14} mb={0}>
        {label}
      </FormLabel>
      <RadioGroup {...rest} name={name} h='full'>
        <Stack direction='row' justifyContent='space-evenly' alignItems='center' h='full'>
          <Radio {...field} value='ja' onChange={onChange}>
            Ja
          </Radio>
          <Radio {...field} value='nein' onChange={onChange}>
            Nein
          </Radio>
        </Stack>
      </RadioGroup>
      <CustomErrorMessage name={field.name} />
    </FormControl>
  );
};
export default RadioField;
