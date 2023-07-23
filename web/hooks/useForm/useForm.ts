import { useState, useCallback } from 'react';

type UseFormInput<T> = {
  initialValues: T;
  onSubmit?: (values: T) => Promise<void>;
}

type UseFormOutput<T> = {
  values: T;
  handleChange: (value: Record<string, any>) => void;
  handleSubmit: () => Promise<void>;
}

export default function useForm<T>({ initialValues, onSubmit }: UseFormInput<T>): UseFormOutput<T> {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = useCallback((value: Record<string, any>) => {
    setValues((prevValues) => ({
      ...prevValues,
      ...value,
    }));
  }, []);

  const handleSubmit = useCallback(async () => {
    await onSubmit?.(values);
  }, [onSubmit, values]);

  return {
    values,
    handleChange,
    handleSubmit,
  };
}