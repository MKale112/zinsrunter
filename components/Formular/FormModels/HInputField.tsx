import { Box, FormControl, FormLabel, HStack, Input } from '@chakra-ui/react';
import { FieldProps } from 'formik';
import React, { FC } from 'react';
import CustomErrorMessage from './CustomErrorMessage';
import { IconObject } from '@/components/icons/iconObject';

export interface Props extends FieldProps {
  placeholder?: string;
  label: string;
  width?: string;
  frontIcon?: keyof typeof IconObject;
  backIcon?: keyof typeof IconObject;
}

const HInputField: FC<Props> = ({ placeholder = '', label, width, field, frontIcon, backIcon }) => (
  <FormControl>
    <HStack>
      <Box w='5%'>{frontIcon && React.createElement(frontIcon)}</Box>
      <HStack justifyContent='space-between' w={'full'}>
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
      </HStack>
      <Box w='5%'>{backIcon && React.createElement(backIcon)}</Box>
    </HStack>
    <CustomErrorMessage name={field.name} />
  </FormControl>
);

export default HInputField;
