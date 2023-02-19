import { FormControl, FormLabel } from '@chakra-ui/react';
import { FieldProps } from 'formik';
import React, { FC } from 'react';
import CustomErrorMessage from './CustomErrorMessage';
import { Select as ReactSelect, GroupBase, OptionsOrGroups, ChakraStylesConfig } from 'chakra-react-select';

export interface Props extends FieldProps {
  name: string;
  label: string;
  placeholder?: string;
  type: string;
  options: OptionsOrGroups<unknown, GroupBase<unknown>>;
  onChangeInput: (input: string) => void;
}

const AutocompleteField: FC<Props> = ({ name, label, placeholder = '', options, onChangeInput, field }) => {
  const chakraStyles: ChakraStylesConfig = {
    clearIndicator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    container: (provided) => ({
      ...provided,
      //   border: '2px solid',
      //   borderColor: 'primary.acid',
      //   borderRadius: 'md',
    }),
    valueContainer: (base) => ({
      ...base,
      border: '2px solid',
      borderColor: 'primary.acid',
      borderRadius: 'md',
    }),
  };

  return (
    // <Field name={name}>
    //   {({ field, form }: FieldProps<FormikValues>) => {
    //     const onChange = (option: any) => {
    //       form.setFieldValue(name, option);
    //     };
    // const onBlur = () => {
    //   form.setFieldTouched(name, true);
    // };
    // return (
    <FormControl>
      <FormLabel fontSize={14} mb={0}>
        {label}:
      </FormLabel>

      <ReactSelect
        {...field}
        name={name}
        value={field.value}
        placeholder={placeholder}
        options={options}
        // defaultValue={{ value: null, label: '' }}
        chakraStyles={chakraStyles}
        onChange={onChangeInput}
      />
      <CustomErrorMessage name={field.name} />
    </FormControl>
  );
  //       }}
  //     </Field>
  //   );
};

export default AutocompleteField;
