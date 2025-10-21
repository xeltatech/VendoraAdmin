'use client'

interface InputProps {
  label: string
  type?: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
}

export function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-black2">
        {label}
        {required && <span className="text-red1">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`px-4 py-3 rounded-lg border ${
          error ? 'border-red1' : 'border-gray7'
        } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
      />
      {error && <span className="text-xs text-red1">{error}</span>}
    </div>
  )
}
