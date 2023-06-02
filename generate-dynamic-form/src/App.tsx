import DynamicForm from "./components/DynamicForm";
import { fields } from "./data/formFields";
import { uniqueFieldsArrayOfObj } from "./utils";

function App() {
  const handleSubmit = (data: any) => {
    console.log(data);
  };
 

  const uniqueFields = uniqueFieldsArrayOfObj(fields);

  return (
    <div>
      <h1>Dynamic Form Example</h1>
      <DynamicForm fields={uniqueFields} onSubmit={handleSubmit} />
    </div>
  );
}

export default App

