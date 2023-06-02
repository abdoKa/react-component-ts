import { HTMLInputTypeAttribute } from "react";
import { FieldErrors, FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export type FormField = {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  required: boolean;
  options?: { label: string; value: string }[];
}

export interface DynamicFormProps<T extends FieldValues> {
  fields: FormField[];
  errors: FieldErrors<T>;
  handleSubmit: UseFormHandleSubmit<T, undefined>;
  register: UseFormRegister<T>;
  onSubmit: (data: T) => void;
}
