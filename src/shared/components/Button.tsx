'use client'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
  className?: string
  disabled?: boolean
}

export function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'w-full py-3 rounded-lg font-medium transition-colors'
  const variantStyles = {
    primary: 'bg-black2 text-white hover:bg-black1',
    secondary: 'bg-gray6 text-black2 hover:bg-gray7'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </button>
  )
}
