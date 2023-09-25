type ButtonProps = {
  value?: string,
  type?: 'default' | 'danger' | 'primary',
  primary?: boolean,
  disable?: boolean,
  href?: string,
  className?: string,
  onClick?: (e: any) => void,
}

const buttonBodyColors: {[key: string]: string} = {
  default: 'bg-slate-400',
  primary: 'bg-blue-400',
  danger: 'bg-red-400',
}

const buttonBorderColors: {[key: string]: string} = {
  default: 'border-slate-400',
  primary: 'border-blue-400',
  danger: 'border-red-400',
}


const Button = ({
  value='Button',
  type='default',
  primary=false,
  disable=false,
  href,
  className,
  onClick,
} : ButtonProps) => {
  const buttonBodyColor = buttonBodyColors[type]
  const buttonBorderColor = buttonBorderColors[type]

  const handleClick = (e: any) => {
    if (href) { window.location.pathname = href }
    if (onClick) { onClick(e) }
  }

  return (
    <button
      className={`rounded-full px-3 text-2xl border-2
        ${primary ? buttonBodyColor : ''}
        ${buttonBorderColor}
        ${disable ? 'disable text-slate-400' : ''}
        ${className ? className : ''}
      `}
      onClick={handleClick}
    >
      {value}
    </button>
  )
}

export default Button