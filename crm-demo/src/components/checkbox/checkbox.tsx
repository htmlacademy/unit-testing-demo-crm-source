interface CheckboxProps{
  name: string;
  checked: boolean;
  disabled: boolean;
}
export function Checkbox (p:Partial<CheckboxProps>){
  const {checked,disabled,name} = p;
  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" name={name} checked={checked} disabled={disabled}/>
        <span></span>
      </label>
    </div>
  );
}
