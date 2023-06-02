import { FormField } from "../interfaces";

export const uniqueFieldsArrayOfObj = (fields: FormField[]): FormField[] => {
  return fields.filter((field, index) => {
    return fields.findIndex((f) => f.name === field.name) === index;
  });
}