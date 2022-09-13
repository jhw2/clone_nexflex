import { ChangeEvent, useState } from "react";

interface IUseInput<T>{
  value: string;
  setValue: (value: string) => void;
  onChange: (e: ChangeEvent<T>) => void
}
export const useInput = <T extends HTMLInputElement>(defaultValue = ''): IUseInput<T> => {
  const [value, setValue] = useState<string>(defaultValue);
  const onChange = (e: ChangeEvent<T>) => {
    setValue(e.target.value);
  };
  return {
    value,
    setValue,
    onChange,
  };
};
