import MultiSelect from "./components/MultiSelect"

function App() {
  const options = [{
    label: 'React',
    value: 'react'
  }]

  const selectLabel = "Select and options";

  return (
    <>
      <MultiSelect options={options} optionLabel={selectLabel}/>
    </>
  )
}

export default App
