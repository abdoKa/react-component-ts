import { useState } from "react"
import { SelectOption } from "./components/MultiSelect"
import MultiSelect from "./components/MultiSelect"

const options = [
  { label: "React", value: 'react' },
  { label: "JavaScript", value: "js" },
  { label: "Typescript", value: "typescript" },
  { label: "Java", value: 'java' },
  { label: "C++", value: 'c-plus-plus' },
]

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]])

  return (
    <>
    <p className="mb-5 text-center">Multi select input using  <code className="bg-secondary text-primary px-1 font-black uppercase">Typescript</code> & <code className="bg-secondary text-primary px-1 font-black uppercase">TailwindCSS</code></p>
      <MultiSelect
        multiple
        options={options}
        value={value1}
        onChange={o => setValue1(o)}
      />
      <p className="mt-10 text-center">Designed & Built by <span className="bg-secondary text-primary px-1 font-black">KABOU</span> <span>ABDELALI</span> <br></br><a href="https://www.abdelalikabou.me/"> abdelalikabou.me</a></p>
    </>
  )
}

export default App
