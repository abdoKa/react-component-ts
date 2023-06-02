import { FormField } from "../interfaces";

export const fields: FormField[] = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    required: true,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
  },
  {
    name: 'age',
    label: 'Age',
    type: 'number',
    required: false,
  },
  {
    name: 'gender',
    label: 'Gender',
    type: 'radio',
    required: true,
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
    ],
  },
  {
    name: 'country',
    label: 'Country',
    type: 'select',
    required: true,
    options: [
      { label: 'Choose a country', value: '' },
      { label: 'USA', value: 'usa' },
      { label: 'Canada', value: 'canada' },
      { label: 'UK', value: 'uk' },
    ],
  },
  {
    name: 'date',
    label: 'Date',
    type: 'date',
    required: true,
  },
  {
    name: 'file',
    label: 'Document',
    type: 'file',
    required: true,
  }
];