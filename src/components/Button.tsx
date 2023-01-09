interface ButtonProps {
  children: string
  className?: string
  cor?: 'green' | 'blue' | 'gray'
  onClick?: () => void
}


export default function Button({ children, cor, className, onClick  } : ButtonProps) {
  const color = cor ?? 'gray';
  return (
    <button className={`
      bg-gradient-to-r from-${color}-400 to-${color}-700
      text-white px-4 py-2 rounded-md ${className}
    `} onClick={onClick}>
      { children }
    </button>
  );
}
