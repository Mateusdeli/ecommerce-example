import { ChangeEvent, useState } from "react";

interface UseFormOutput<T> {
    data: T
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    isFieldsFilled: () => boolean
}

export default function useForm<T>(initialValues: T) {
  const [data, setData] = useState<T>(initialValues);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const isFieldsFilled = () => {
    return !Object.values(data).includes("")
  }

  return {
    data,
    onChange,
    isFieldsFilled,
  } as UseFormOutput<T>;
}
