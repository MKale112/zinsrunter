import { FormControl, FormLabel, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { FieldProps } from 'formik';
import React, { FC } from 'react';
import CustomErrorMessage from './CustomErrorMessage';

interface Props extends FieldProps {
  label: string;
  name: string;
}

const RadioField: FC<Props> = ({ label, name, field }) => {
  const { onChange, ...rest } = field;

  return (
    <FormControl mb='5'>
      <FormLabel fontSize={14} mb={0}>
        {label}
      </FormLabel>
      <RadioGroup {...rest} name={name}>
        <Stack direction='row'>
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
