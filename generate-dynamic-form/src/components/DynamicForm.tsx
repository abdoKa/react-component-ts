import React from 'react';
import { useForm, FieldValues} from 'react-hook-form';
import { z } from 'zod';
import WidgetComponents from '../widgets/WidgetComponents';
import { DynamicFormProps } from '../interfaces';


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
