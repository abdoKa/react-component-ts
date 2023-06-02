import { FieldValues, UseFormRegister } from "react-hook-form";

interface WidgetProps {
  id: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  options?: { label: string; value: string }[];
}

interface WidgetMap {
  [key: string]: React.ComponentType<WidgetProps>;
}

const WidgetComponents: WidgetMap = {
  text: ({ id, name, register }) => <input type="text" id={id} {...register(name)} />,
  tel: ({ id, name, register }) => <input type="tel" id={id} {...register(name)} />,
  password: ({ id, name, register }) => <input type="password" id={id} {...register(name)} />,
  url: ({ id, name, register }) => <input type="url" id={id} {...register(name)} />,
  number: ({ id, name, register }) => <input type="number" id={id} {...register(name)} />,
  email: ({ id, name, register }) => <input type="email" id={id} {...register(name)} />,
  checkbox: ({ id, name, register }) => <input type="checkbox" id={id} {...register(name)} />,
  radio: ({ name, register, options })=>
    options?.map((option) => (
      <div key={`${name}-${option.value}`}>
        <input type="radio" id={`${name}-${option.value}`} value={option.value} {...register(name)} />
        <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
      </div>
    )),
  select: ({ id, name, register, options }) => (
    <select id={id} {...register(name)}>
      {options?.map((option) => (
        <option key={`${name}-${option.value}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  ),
  date: ({ id, name, register }) => <input type="date" id={id} {...register(name)} />,
  file: ({ id, name, register }) => <input type="file" accept=".pdf" id={id} {...register(name)} />,
};

export default WidgetComponents;