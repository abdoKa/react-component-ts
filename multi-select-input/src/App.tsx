import { useState } from "react"
import { SelectOption } from "./components/MultiSelect"
import MultiSelect from "./components/MultiSelect"

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
]

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]])

  return (
    <>
      <MultiSelect
        multiple
        options={options}
        value={value1}
        onChange={o => setValue1(o)}
      />
    </>
  )
}

export default App
