import { useId, useState, useEffect, ChangeEvent } from 'react';
import s from './checkbox.module.scss';

type HtmlInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface CheckboxProps extends HtmlInputProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Checkbox({
  label,
  disabled = false,
  className = '',
  checked,
  defaultChecked,
  onChange,
  ...rest
}: CheckboxProps) {
  const id = useId();
  const [internalChecked, setInternalChecked] = useState(
    defaultChecked ?? false,
  );

  useEffect(() => {
    if (checked !== undefined) {
      setInternalChecked(checked);
    }
  }, [checked]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (checked === undefined) {
      setInternalChecked(e.target.checked);
    }
    onChange?.(e);
  };

  return (
    <div className={s.wrapper}>
      <input
        id={id}
        type="checkbox"
        className={`${s.checkbox}  ${className}`}
        disabled={disabled}
        checked={internalChecked}
        onChange={handleChange}
        {...rest}
      />
      {label && (
        <label
          htmlFor={id}
          className={`${s.label} ${disabled ? s.disabled : ''}`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default Checkbox;
