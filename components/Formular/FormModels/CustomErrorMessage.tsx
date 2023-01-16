import React, { FC } from 'react';
import { ErrorMessage, ErrorMessageProps } from 'formik';
import { Text } from '@chakra-ui/react';

const CustomErrorMessage: FC<ErrorMessageProps> = ({ name }) => (
  <ErrorMessage name={name}>
    {(msg) => (
      <Text fontSize={12} color='red'>
        {msg}
      </Text>
    )}
  </ErrorMessage>
);
export default CustomErrorMessage;
