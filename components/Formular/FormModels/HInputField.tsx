import { IconObject } from '@/components/icons/iconObject';
import { Box, ComponentWithAs, FormControl, FormLabel, HStack, IconProps, Input } from '@chakra-ui/react';
import { FieldHookConfig, useField } from 'formik';
import React, { FC } from 'react';
import CustomErrorMessage from './CustomErrorMessage';

interface CustomHInputProps {
  label: string;
  placeholder?: string;
  width?: string;
  value?: number | string;
  frontIcon?: FC;
  backIcon?: FC;
  onInputChange?: (value: number) => void;
}

const HInputField: FC<FieldHookConfig<string> & CustomHInputProps> = (props) => {
  const [field, meta, helpers] = useField(props);
  const { label, placeholder = '', width, onInputChange, frontIcon, backIcon, value } = props;

  // console.log(field.name, value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    helpers.setValue(e.target.value);
    if (onInputChange) {
      onInputChange(Number((e.target as HTMLInputElement).value));
    }
  };

  return (
    <FormControl>
      <HStack>
        <Box w='5%'>{frontIcon && React.createElement(frontIcon)}</Box>
        <HStack justifyContent='space-between' w={'full'}>
          <FormLabel fontSize={14} mb={0}>
            {label}:{' '}
          </FormLabel>
          <Input
            {...field}
            type='number'
            width={width}
            placeholder={placeholder}
            value={value}
            borderColor='primary.acid'
            border='2px'
            color='primary.blue'
            fontWeight='medium'
            onChange={handleChange}
          />
        </HStack>
        <Box w='5%'>{backIcon && React.createElement(backIcon)}</Box>
      </HStack>
      {meta.error && <CustomErrorMessage name={field.name} />}
    </FormControl>
  );
};

export default HInputField;
