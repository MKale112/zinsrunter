import { Box, FormControl, FormLabel, HStack, Input, Stack, useMediaQuery } from '@chakra-ui/react';
import { FieldHookConfig, useField } from 'formik';
import React, { FC } from 'react';
import { NumericFormat } from 'react-number-format';
import CustomErrorMessage from './CustomErrorMessage';

interface CustomHInputProps {
  label: string;
  placeholder?: string;
  width?: string;
  value?: number | string;
  frontIcon?: FC;
  backIcon?: FC;
  onInputChange?: (value: string) => void;
}

const HInputField: FC<FieldHookConfig<string> & CustomHInputProps> = (props) => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');
  const [field, meta, helpers] = useField(props);
  const { label, placeholder = '', width, onInputChange, frontIcon, backIcon, value } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    helpers.setValue(e.target.value);
    console.log('value: ', e.target.value);
    if (onInputChange) {
      onInputChange((e.target as HTMLInputElement).value);
    }
  };

  return (
    <FormControl>
      <HStack justifyContent='space-between' alignItems={isMobile ? 'flex-start' : 'center'}>
        <Box w='5%'>{frontIcon && React.createElement(frontIcon)}</Box>
        <Stack direction={isMobile ? 'column' : 'row'} justifyContent='space-between' w='full' alignItems='center'>
          <FormLabel fontSize={14} mb={0} mx={0} width='full'>
            {label}
          </FormLabel>
          <HStack w='full' justifyContent='flex-end' spacing={0}>
            <NumericFormat
              customInput={Input}
              thousandSeparator='.'
              decimalSeparator=','
              {...field}
              width={width}
              placeholder={placeholder}
              value={value}
              borderColor='primary.acid'
              border='2px'
              color='primary.blue'
              fontWeight='medium'
              onChange={handleChange}
            />
            <Box w='fit-content'>{backIcon && React.createElement(backIcon)}</Box>
          </HStack>
        </Stack>
      </HStack>
      {meta.error && <CustomErrorMessage name={field.name} />}
    </FormControl>
  );
};

export default HInputField;
