/* eslint-disable @typescript-eslint/no-explicit-any */
import type { CSSProperties, ReactNode } from 'react';
import { useRef } from 'react';
import type {
  ClearIndicatorProps,
  DropdownIndicatorProps,
  GroupHeadingProps,
  OptionProps,
  ValueContainerProps,
} from 'react-select';
import Select, { components, createFilter } from 'react-select';
import { Button } from '../..';

/**
 * custom select styles
 */
const customSelectStyles: Partial<any> = {
  control: (provided: CSSProperties) => ({
    ...provided,
  }),
  dropdownIndicator: (provided: CSSProperties) => ({
    ...provided,
  }),
  indicatorsContainer: (provided: CSSProperties) => ({
    ...provided,
  }),
  indicatorSeparator: (provided: CSSProperties) => ({
    ...provided,
  }),
  clearIndicator: (provided: CSSProperties) => ({
    ...provided,
  }),
  loadingIndicator: (provided: CSSProperties) => ({
    ...provided,
  }),
  loadingMessage: (provided: CSSProperties) => ({
    ...provided,
  }),
  menu: (provided: CSSProperties) => ({
    ...provided,
  }),
  menuList: (provided: CSSProperties) => ({
    ...provided,
  }),
  noOptionsMessage: (provided: CSSProperties) => ({
    ...provided,
  }),
  option: (provided: CSSProperties) => {
    return {
      ...provided,
    };
  },
  placeholder: (provided: CSSProperties) => ({
    ...provided,
  }),
  input: () => {
    return {};
  },
  singleValue: (provided: CSSProperties) => ({
    ...provided,
  }),
  multiValue: (provided: CSSProperties) => ({
    ...provided,
  }),
  menuPortal: (provided: CSSProperties) => ({ ...provided, zIndex: 9999 }),
  valueContainer: (provided: CSSProperties) => ({
    ...provided,
  }),
  container: (provided: CSSProperties) => {
    return {
      ...provided,
    };
  },
};

/**
 * Dropdown indicator element
 */
const DropdownIndicator = (props: DropdownIndicatorProps<any>) => {
  return (
    <components.DropdownIndicator {...props}>
      {props.selectProps.customDropdownIcon ? (
        props.selectProps.customDropdownIcon
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={8}
          height={8}
          viewBox="0 0 255 255"
          style={{ fontSize: '8px', fill: '#8F8F8F' }}
        >
          <path d="M0 63.75l127.5 127.5L255 63.75z" />
        </svg>
      )}
    </components.DropdownIndicator>
  );
};

/**
 * Clear indicator element
 */
const ClearIndicator = (props: ClearIndicatorProps<any>) => {
  return (
    <components.ClearIndicator {...props}>
      {/* // close icon */}
    </components.ClearIndicator>
  );
};

/**
 * Checkbox Option Container
 */
const CheckboxOption = ({ ...props }: OptionProps<any>) => {
  return (
    <div>
      <components.Option {...props}>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={props.isSelected}
            onChange={() => null}
          />
          <label className="form-check-label" style={{ cursor: 'pointer' }}>
            {props.label}
          </label>
        </div>
      </components.Option>
    </div>
  );
};

/**
 * Checkbox All Select Option
 */
const allOption = {
  label: 'Select all',
  value: '*',
};

/**
 * Checkbox Option Container
 */
const ValueContainer = (props: ValueContainerProps<OptionType>) => {
  const { children, ...args } = props;

  const currentValues = args.getValue();
  let selectedCount = currentValues.length;

  if (currentValues.some((val: OptionType) => val.value === allOption.value)) {
    selectedCount = currentValues.length - 1;
  }
  return (
    <components.ValueContainer {...args}>
      <div style={selectedCount ? {} : { color: '#b3b3b3' }} className="mr-2">
        {selectedCount
          ? selectedCount === 1
            ? currentValues[currentValues?.length === 2 ? 1 : 0]?.label
            : `${selectedCount} selected`
          : children instanceof Array && children?.[1]?.props?.value
            ? ''
            : 'Choose Option...'}
      </div>
      {/* This element contains the event for opening and closing the select input */}
      {children instanceof Array ? children[1] : null}
    </components.ValueContainer>
  );
};

const HideGroupHeading = (props: GroupHeadingProps<OptionType>) => {
  const { children } = props;
  return (
    <Button>
      <components.GroupHeading {...props}>{children}</components.GroupHeading>
    </Button>
  );
};

interface OnMultiCheckboxSelectProps {
  selected: ValueType<OptionType, IsMulti>;
  action: string;
  onMultiChange: (event: ValueType<OptionType, IsMulti>) => void;
  options: OptionType[];
  showDefaultValueContainer: boolean;
}
/**
 * On Multiple Checkbox Select
 */
const onMultiCheckboxSelect = ({
  selected,
  action,
  onMultiChange,
  options,
  showDefaultValueContainer,
}: OnMultiCheckboxSelectProps) => {
  if (selected !== null && selected instanceof Array && selected.length > 0) {
    if (selected[selected.length - 1].value === allOption.value) {
      return showDefaultValueContainer
        ? onMultiChange(options)
        : action === 'deselect-option'
          ? onMultiChange([])
          : onMultiChange([allOption, ...options]);
    }
    let result: OptionType[] = [];
    if (selected.length === options.length) {
      if (selected.includes(allOption)) {
        result = selected.filter((option) => option.value !== allOption.value);
      } else if (action === 'select-option') {
        result = showDefaultValueContainer ? options : [allOption, ...options];
      }
      return onMultiChange(result);
    }

    return onMultiChange(selected);
  }
  return onMultiChange([]);
};

/**
 * Generic dropdown component
 */
export interface OptionType {
  label: string;
  value: string | number | any;
  extraData?: any;
  options?: OptionType[];
}
export type IsMulti = boolean;
export interface OnChangeType {
  name: string;
  value: ValueType<OptionType, IsMulti>;
  main?: string | number;
}
export interface OnInputType {
  newValue: string;
  actionMeta?: InputActionMeta;
}

export interface StyledSelectProps {
  touched?: boolean;
  errors?: Record<string, string>;
  onBlur?: (name: string, active: boolean) => any;
  onFocus?: (e: any) => void;
  placeholder?: string;
  id?: string;
  name?: string;
  isSearchable?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  options: OptionType[];
  onChange: ({ name, value, main }: OnChangeType) => void;
  onInputChange?: ({ newValue, actionMeta }: OnInputType) => void;
  value: ValueType<OptionType, IsMulti> | number | string | boolean;
  multi?: IsMulti;
  multiCheckbox?: IsMulti;
  autoFocus?: boolean | undefined;
  className?: string;
  searchModule?: boolean;
  filterModule?: boolean;
  customStyles?: CSSProperties;
  userCustomOption?: boolean;
  calculateValueOnChange?: boolean;
  customDropdownIcon?: ReactNode;
  // getOptionLabel: ()getOptionLevel()
  /** Show values instead of 1,2 selected and removes checkbox */
  showDefaultValueContainer?: boolean;
  isGrouped?: boolean;
  isClearable?: boolean;
  showCaret?: boolean;
  formatOptionLabel?: (
    option: OptionType,
    labelMeta: FormatOptionLabelMeta<OptionType, IsMulti>
  ) => React.ReactNode;
}
function StyledSelect(props: StyledSelectProps) {
  const {
    touched,
    onBlur,
    placeholder,
    id,
    isGrouped = false,
    name = '',
    isSearchable,
    isLoading,
    isDisabled,
    options,
    onChange,
    onInputChange,
    value,
    multi,
    multiCheckbox,
    autoFocus,
    className,
    searchModule,
    filterModule,
    customStyles,
    calculateValueOnChange,
    customDropdownIcon,
    showDefaultValueContainer = false,
    errors,
    onFocus,
    formatOptionLabel,
    isClearable = true,
    showCaret = true,
  } = props;
  const imageDivRef = useRef([]);

  const calculateValue = () => {
    if (calculateValueOnChange) {
      if (multi || multiCheckbox) {
        let updatedValue = value as OptionType[];

        const hasSelectAll = Array.isArray(updatedValue)
          ? updatedValue?.some((value) => value.value === allOption.value)
          : false;

        if (
          updatedValue?.length &&
          options.length &&
          updatedValue?.length === options.length
        ) {
          updatedValue = showDefaultValueContainer
            ? updatedValue
            : [...updatedValue, allOption];
        } else if (hasSelectAll) {
          if (options.length + 1 !== updatedValue?.length) {
            updatedValue = updatedValue?.filter(
              (selectedValue) => selectedValue.value !== allOption.value
            );
          }
        }
        return (updatedValue as ValueType<OptionType, IsMulti>) || null;
      }
      if (value instanceof Array) {
        return options.length
          ? options.find(
              (option) =>
                option.value === (value as unknown as OptionType)?.value
            ) || null
          : null;
      }
      return options?.length
        ? options.find(
            (option) =>
              (option?.value ||
                typeof option?.value === 'boolean' ||
                option?.value === 0) &&
              option?.value?.toString() === value?.toString()
          ) || null
        : null;
    }

    return (value as ValueType<OptionType, IsMulti>) || null;
  };

  return (
    <Select
      filterOption={createFilter({ ignoreAccents: false })}
      menuPortalTarget={document.body}
      formatOptionLabel={formatOptionLabel}
      // menuPosition={'fixed'}
      isMulti={multi ?? multiCheckbox}
      closeMenuOnSelect={!multiCheckbox}
      hideSelectedOptions={!multiCheckbox}
      placeholder={
        placeholder || onInputChange ? placeholder : 'Choose Option....'
      }
      id={id}
      name={name}
      hasError={Boolean(errors)}
      onBlur={() => onBlur && onBlur(name, true)}
      onChange={(selected: any, actionMeta) => {
        // MultiSelect
        if (multiCheckbox) {
          onMultiCheckboxSelect({
            selected,
            action: actionMeta.action,
            onMultiChange: (selected) => onChange({ name, value: selected }),
            options,
            showDefaultValueContainer: false,
          });
        } else {
          onChange({ name, value: selected, main: selected?.value });
        }
      }}
      searchModule={searchModule}
      filterModule={filterModule}
      onInputChange={(value, actionMeta) => {
        if (onInputChange) onInputChange({ newValue: value, actionMeta });
      }}
      value={calculateValue()}
      touched={touched}
      options={
        multiCheckbox && options.length
          ? showDefaultValueContainer &&
            options.length === (value as OptionType[])?.length
            ? options
            : [allOption, ...options]
          : options
      }
      isSearchable={isSearchable}
      isLoading={isLoading}
      isDisabled={isDisabled}
      loadingMessage={() => 'Fetching Data...'}
      components={
        isGrouped
          ? {
              Option: CheckboxOption,
              ValueContainer,
              DropdownIndicator: showCaret ? DropdownIndicator : () => null,
              ClearIndicator: showCaret ? ClearIndicator : () => null,
              GroupHeading: HideGroupHeading,
            }
          : !multiCheckbox
            ? {
                DropdownIndicator: showCaret ? DropdownIndicator : () => null,
                ClearIndicator: showCaret ? ClearIndicator : () => null,
              }
            : showDefaultValueContainer
              ? {
                  DropdownIndicator: showCaret ? DropdownIndicator : () => null,
                  ClearIndicator: showCaret ? ClearIndicator : () => null,
                }
              : {
                  Option: CheckboxOption,
                  ValueContainer,
                  DropdownIndicator: showCaret ? DropdownIndicator : () => null,
                  ClearIndicator: showCaret ? ClearIndicator : () => null,
                }
      }
      styles={customSelectStyles}
      menuPlacement="auto"
      className={className}
      autoComplete="off"
      customStyles={customStyles || {}}
      imageDivRef={imageDivRef}
      isClearable={isClearable}
      customDropdownIcon={customDropdownIcon}
      onFocus={onFocus}
    />
  );
}

export default StyledSelect;
