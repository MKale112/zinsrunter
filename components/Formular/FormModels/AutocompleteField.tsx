import { FormControl, FormLabel } from '@chakra-ui/react';
import { Field, FieldProps, FormikValues, useFormikContext } from 'formik';
import React, { FC, useEffect } from 'react';
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
  value: { value: number; label: number };
}

const AutocompleteField: FC<Props> = ({
  name,
  label,
  placeholder = '',
  options,
  onChangeInput,
  onSelectOption,
  value,
}) => {
  const chakraStyles: ChakraStylesConfig = {
    clearIndicator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    container: (provided) => ({
      ...provided,
      border: 'none',
    }),
    valueContainer: (base) => ({
      ...base,
      border: '2px solid',
      borderColor: 'primary.acid',
      borderRadius: 'md',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      display: 'none', // hide the dropdown button
    }),
    control: (provided) => ({
      ...provided,
      border: 'none', // remove the default control border
      '&:hover': {
        borderColor: 'black', // change border color on hover
      },
    }),
  };
  const handleSelectOption = (newValue: AutocompleteMapEntry) => {
    onSelectOption(newValue);
  };
  const customNoOptionsMessage = () => ''; // return null to remove the message

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
    <Field name={name}>
      {({ field, form }: FieldProps<FormikValues>) => {
        const onChange = (option: any) => {
          form.setFieldValue(name, option.value);
          handleSelectOption(option);
        };
        return (
          <FormControl>
            <FormLabel fontSize={14} mb={0}>
              {label}
            </FormLabel>

            <ReactSelect
              name={name}
              placeholder={placeholder}
              options={options}
              value={value.label && value}
              chakraStyles={chakraStyles}
              onInputChange={(newValue) => onChangeInput(newValue)}
              onChange={(newValue) => onChange(newValue)}
              noOptionsMessage={customNoOptionsMessage}
            />
            <CustomErrorMessage name={field.name} />
          </FormControl>
        );
      }}
    </Field>
  );
};

export default AutocompleteField;
