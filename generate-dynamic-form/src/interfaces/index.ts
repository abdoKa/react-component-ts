import { HTMLInputTypeAttribute } from "react";
import { DeepPartial, FieldValues } from "react-hook-form";

export interface FormField {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  required: boolean;
  options?: { label: string; value: string }[];
}

export interface DynamicFormProps {
  fields: FormField[];
  onSubmit: (data: DeepPartial<FieldValues>) => void;
}