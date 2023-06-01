import DynamicForm, { FormField } from "./DynamicForm";

function App() {
  const handleSubmit = (data: any) => {
    console.log(data);
  };
  

  const fields: FormField[] = [
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
  ];

  return (
    <div>
      <h1>Dynamic Form Example</h1>
      <DynamicForm fields={fields} onSubmit={handleSubmit} />
    </div>
  );
}

export default App
