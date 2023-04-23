import { IconObject } from '@/components/icons/iconObject';
import { Box, FormControl, FormLabel, HStack, Select } from '@chakra-ui/react';
import { FieldProps, useField, useFormikContext } from 'formik';
import React, { FC, useEffect } from 'react';
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
}) => {
  const [_formikField, meta] = useField(field);

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
    <FormControl isInvalid={meta.touched && !!meta.error}>
      <HStack>
        <Box w='5%'>{frontIcon && React.createElement(frontIcon)}</Box>
        <HStack justifyContent='space-between' w={'full'}>
          <FormLabel fontSize={14} mb={0}>
            {label}{' '}
          </FormLabel>

          {options && (
            <Select
              {...field}
              placeholder={placeholder}
              borderColor={meta.touched && !!meta.error ? 'red.500' : 'primary.acid'}
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
};

export default HSelectField;
