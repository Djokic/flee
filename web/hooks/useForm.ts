import { useState, useCallback } from 'react';
import { set, cloneDeep } from 'lodash';

type UseFormInput<T> = {
  initialValues: T;
  onSubmit?: (values: T) => Promise<void>;
}

type UseFormOutput<T> = {
  values: T;
  handleChange: (value: Record<string, any>) => void;
  handleSubmit: () => Promise<void>;
}

/**
 * This hook is used for state management of forms
 * it exposes form values and handlers for change and submit
 * @param initialValues
 * @param onSubmit
 */
export default function useForm<T>({ initialValues, onSubmit }: UseFormInput<T>): UseFormOutput<T> {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = useCallback((valueObject: Record<string, any>) => {
    const path = Object.keys(valueObject)[0];
    const value = valueObject[path];

    setValues(prevValues => {
      // create a deep copy of the previous values
      const valuesCopy = cloneDeep(prevValues);
      // set the new value at the given path
      set(valuesCopy as Record<string, any>, path, value);
      return valuesCopy;
    });
  }, [setValues]);

  const handleSubmit = useCallback(async () => {
    await onSubmit?.(values);
  }, [onSubmit, values]);

  return {
    values,
    handleChange,
    handleSubmit,
  };
}
