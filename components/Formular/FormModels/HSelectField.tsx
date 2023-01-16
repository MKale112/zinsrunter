import { IconObject } from '@/components/icons/iconObject';
import { Box, FormControl, FormLabel, HStack, Select } from '@chakra-ui/react';
import { FieldProps } from 'formik';
import React, { FC } from 'react';
import CustomErrorMessage from './CustomErrorMessage';

export interface Props extends FieldProps {
  label: string;
  options?: string[];
  placeholder?: string;
  width?: string;
  frontIcon?: keyof typeof IconObject;
  backIcon?: keyof typeof IconObject;
}

const HSelectField: FC<Props> = ({
  label,
  options,
  placeholder = 'Please select one',
  field,
  frontIcon,
  backIcon,
  width = '100%',
}) => (
  <FormControl>
    <HStack>
      <Box w='5%'>{frontIcon && React.createElement(frontIcon)}</Box>
      <HStack justifyContent='space-between' w={'full'}>
        <FormLabel fontSize={14} mb={0}>
          {label}:{' '}
        </FormLabel>

        {options && (
          <Select
            {...field}
            placeholder={placeholder}
            borderColor='primary.acid'
            border='2px'
            color='primary.blue'
            fontWeight='medium'
            width={width}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </Select>
        )}
      </HStack>
      <Box w='5%'>{backIcon && React.createElement(backIcon)}</Box>
    </HStack>
    <CustomErrorMessage name={field.name} />
  </FormControl>
);

export default HSelectField;
