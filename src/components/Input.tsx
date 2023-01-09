interface InputProps {
  label: string
  type?: 'text' | 'number'
  value: string | number
  readOnly?: boolean
  className?: string
  onChange?: (valor : any) => void
}

export default function Input({ label, type, value, readOnly, onChange, className }: InputProps) {
  return (
    <div className={`
      flex flex-col ${className}
    `}>
      <label className="mb-4">{label}</label>
      <input
        type={type ?? 'text'}
        value={value}
        readOnly={readOnly}
        onChange={(e) => onChange?.(e.target.value)}
        className={`
          border border-purple-500 rounded-lg px-4 py-2
          focus:outline-none bg-gray-50
          ${readOnly ? '' : 'focus:bg-white'}
        `}
      />
    </div>
  );
}
