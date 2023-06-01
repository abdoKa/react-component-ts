import React from 'react';
import { useForm, FieldValues, DeepPartial } from 'react-hook-form';
import { z } from 'zod';

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'checkbox' | 'radio' | 'select';
  required: boolean;
  options?: { label: string; value: string }[];
}

interface WidgetProps {
  id: string;
  name: string;
  register: any;
  options?: { label: string; value: string }[];
}

interface WidgetMap {
  [key: string]: React.ComponentType<WidgetProps>;
}

const WidgetComponents: WidgetMap = {
  text: ({ id, name, register }) => <input type="text" id={id} name={name} {...register(name)} />,
  number: ({ id, name, register }) => <input type="number" id={id} name={name} {...register(name)} />,
  email: ({ id, name, register }) => <input type="email" id={id} name={name} {...register(name)} />,
  checkbox: ({ id, name, register }) => <input type="checkbox" id={id} name={name} {...register(name)} />,
  radio: ({ id, name, register, options }) =>
    options?.map((option) => (
      <div key={option.value}>
        <input type="radio" id={`${name}-${option.value}`} value={option.value} {...register(name)} />
        <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
      </div>
    )),
  select: ({ id, name, register, options }) => (
    <select id={id} name={name} {...register(name)}>
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  ),
};

interface DynamicFormProps {
  fields: FormField[];
  onSubmit: (data: DeepPartial<FieldValues>) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit }) => {
  const schema = z.object(
    fields.reduce((schemaObj, field) => {
      let fieldSchema: z.Schema<any>;
      if (field.required) {
        fieldSchema = z.string().nonempty(`${field.label} is required`);
      } else {
        fieldSchema = z.string();
      }

      return { ...schemaObj, [field.name]: fieldSchema };
    }, {})
  );

  const { handleSubmit, register, formState: { errors } } = useForm<FieldValues>({
    resolver: async (values) => {
      try {
        const validatedData = await schema.parseAsync(values);
        return { values: validatedData, errors: {} };
      } catch (error) {
        if (error instanceof z.ZodError) {
          return { values: {}, errors: error.formErrors.fieldErrors };
        }
        throw error;
      }
    },
  });

  const handleFormSubmit = (data: FieldValues) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {fields.map((field) => {
        const WidgetComponent = WidgetComponents[field.type];
        if (!WidgetComponent) return null;

        return (
          <div className='form-group' key={field.name}>
            <div className='input-group'>
              <label htmlFor={field.name}>{field.label}</label>
              <WidgetComponent id={field.name} name={field.name} register={register} options={field.options} />
            </div>
            {errors && errors[field.name] && <span className='error-msg'>{errors[field.name]}</span>}
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
