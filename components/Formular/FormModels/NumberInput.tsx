import { EuroIcon } from '@/components/icons/EuroIcon';
import { FormControl, FormLabel, HStack, Input } from '@chakra-ui/react';
import { FieldProps, useField } from 'formik';
import React, { FC, useEffect, useRef } from 'react';
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
  const [_formikField, meta] = useField(field);
  const formControlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (meta.touched && !!meta.error && formControlRef.current) {
      formControlRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [meta.error, meta.touched]);

  return (
    <FormControl ref={formControlRef} isInvalid={meta.touched && !!meta.error}>
      <FormLabel fontSize={14} mb={0}>
        {label}
      </FormLabel>
      <HStack spacing={0}>
        <NumericFormat
          customInput={Input}
          width={width}
          placeholder={placeholder}
          thousandSeparator='.'
          decimalSeparator=','
          borderColor={meta.touched && !!meta.error ? 'red.500' : 'primary.acid'}
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
