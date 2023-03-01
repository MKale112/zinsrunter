import { FormControl, FormLabel } from '@chakra-ui/react';
import { Field, FieldProps, FormikValues } from 'formik';
import React, { FC } from 'react';
import CustomErrorMessage from './CustomErrorMessage';
import { Select as ReactSelect, GroupBase, OptionsOrGroups, ChakraStylesConfig } from 'chakra-react-select';
import { AutocompleteMapEntry } from '@/core/types';

export interface Props {
  name: string;
  label: string;
  placeholder?: string;
  options: OptionsOrGroups<unknown, GroupBase<unknown>>;
  onChangeInput: (input: string) => void;
  onSelectOption: (option: AutocompleteMapEntry) => void;
}

const AutocompleteField: FC<Props> = ({ name, label, placeholder = '', options, onChangeInput, onSelectOption }) => {
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

  const handleSelectOption = (newValue: AutocompleteMapEntry) => {
    onSelectOption(newValue);
  };

  return (
    <Field name={name}>
      {({ field, form }: FieldProps<FormikValues>) => {
        const onChange = (option: any) => {
          form.setFieldValue(name, option.value);
          handleSelectOption(option);
        };
        return (
          <FormControl>
            <FormLabel fontSize={14} mb={0}>
              {label}:
            </FormLabel>

            <ReactSelect
              name={name}
              placeholder={placeholder}
              options={options}
              chakraStyles={chakraStyles}
              onInputChange={(newValue) => onChangeInput(newValue)}
              onChange={(newValue) => onChange(newValue)}
            />
            <CustomErrorMessage name={field.name} />
          </FormControl>
        );
      }}
    </Field>
  );
};

export default AutocompleteField;
