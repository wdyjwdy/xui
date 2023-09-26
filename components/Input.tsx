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
            defaultValue={prefix}
            disabled={!prefixEnable}
            className="rounded-l-lg px-3 text-2xl border-2 dark:bg-slate-700 dark:border-slate-500"
          />
        )}
        <input
          type={type}
          defaultValue={value}
          disabled={disabled}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          className={`px-3 text-2xl border-2 w-full dark:bg-slate-700 dark:border-slate-500
            ${className}
            ${(!prefix && !suffix) && 'rounded-lg'}
            ${(!prefix && suffix) && 'rounded-l-lg border-r-0'}
            ${(prefix && !suffix) && 'rounded-r-lg border-l-0'}
            ${(prefix && suffix) && 'border-x-0'}
          `}
        />
        {suffix && (
          <input
            size={4}
            defaultValue={suffix}
            disabled={!suffixEnable}
            className="rounded-r-lg px-3 text-2xl border-2 dark:bg-slate-700 dark:border-slate-500"
          />
        )}
      </div>
    </div>
  )
}

export default Input