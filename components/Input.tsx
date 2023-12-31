import { ChangeEvent } from 'react'

interface InputProps {
  id: string
  value: string
  label: string
  type?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ id, value, label, type, onChange }) => {
  return (
    <div className="relative">
      <input
        id={id}
        value={value}
        type={type}
        onChange={onChange}
        className="
          block
          rouneded-md
          px-6
          pt-6
          pb-1
          w-full
          text-md
          text-white
          bg-neutral-700
          appearence-none
          focus:outline-none
          focus:ring-0
          peer
        "
        placeholder=" "
        autoComplete="off"
      />
      <label
        className="
          absolute
          text-md
          text-zinc-400
          duration-150
          transform
          -translate-y-3
          scale-75
          top-4
          z-10
          origin-[0]
          left-6
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3
          "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}

export default Input