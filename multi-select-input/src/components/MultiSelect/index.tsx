
type MultiSelectProps = {
  options: SelectOption[];
  optionLabel: string;
}

type SelectOption = {
  label: string;
  value: string;
}

const MultiSelect = ({ options, optionLabel }: MultiSelectProps) => {
  return (
    <>
      <select>
        <option value="">{optionLabel}</option>
        {options?.map(({ label, value }) => {
          return (
            <option key={value} value={value}>{label}</option>
          )
        })}
      </select>
    </>
  )
}

export default MultiSelect;