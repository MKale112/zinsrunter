import { EuroIcon } from '@/components/icons/EuroIcon';
import { FormControl, FormLabel, HStack, Input } from '@chakra-ui/react';
import { FieldProps } from 'formik';
import React, { FC } from 'react';
import { NumericFormat } from 'react-number-format';
import CustomErrorMessage from './CustomErrorMessage';

export interface Props extends FieldProps {
  placeholder?: string;
  label: string;
  width?: string;
  type?: string;
  isDisabled?: boolean;
  value?: string;
}

const NumberInput: FC<Props> = ({ placeholder = '', label, width, field, value }) => {
  return (
    <FormControl>
      <FormLabel fontSize={14} mb={0}>
        {label}:
      </FormLabel>
      <HStack>
        <NumericFormat
          customInput={Input}
          width={width}
          placeholder={placeholder}
          thousandSeparator='.'
          decimalSeparator=','
          borderColor='primary.acid'
          border='2px'
          color='primary.blue'
          fontWeight='medium'
          {...field}
          value={value}
        />
        <EuroIcon height='30px' width='30px' />
      </HStack>
      <CustomErrorMessage name={field.name} />
    </FormControl>
  );
};

export default NumberInput;
