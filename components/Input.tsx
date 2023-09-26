type InputProps = {
  value?: string,
  type?: string,
  width?: 'small' | 'middle',
  label?: string,
  disabled?: boolean,
  className?: string,
  prefix?: string,
  suffix?: string,
  prefixEnable?: boolean,
  suffixEnable?: boolean,
  onChange?: (e: any) => void,
  onPressEnter?: (e: any) => void,
}

const Input = ({
  value,
  type='text',
  width='middle',
  label,
  disabled=false,
  className='',
  prefix,
  suffix,
  prefixEnable=false,
  suffixEnable=false,
  onChange,
  onPressEnter,
}: InputProps) => {

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      if (onPressEnter) { onPressEnter(e) }
    }
  }

  return (
    <div>
      <label className="text-2xl">{label}</label>
      <div className={width === 'middle' ? 'w-80 flex' : 'w-40 flex'}>
        {prefix && (
          <input
            size={4}
            value={prefix}
            disabled={!prefixEnable}
            className="rounded-l-lg px-3 text-2xl border-2"
          />
        )}
        <input
          type={type}
          value={value}
          disabled={disabled}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          className={`px-3 text-2xl border-2 w-full
            ${className}
            ${(!prefix && !suffix) && 'rounded-lg'}
            ${(!prefix && suffix) && 'rounded-l-lg'}
            ${(prefix && !suffix) && 'rounded-r-lg'}
          `}
        />
        {suffix && (
          <input
            size={4}
            value={suffix}
            disabled={!suffixEnable}
            className="rounded-r-lg px-3 text-2xl border-2"
          />
        )}
      </div>
    </div>
  )
}

export default Input