import { forwardRef } from "react";

interface ButtonProps {
	name: string;
	id: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	min: string;
	max: string;
	initValue: string;
}

const ButtonSlider = forwardRef<HTMLInputElement, ButtonProps>(
  ({ name, id, onChange, min, max, initValue}, ref) => {
    return (
	<li>
      <label className="block text-sm font-medium text-heading">
        {name}
        <input ref={ref} id={id} type="range" min={min} max={max} defaultValue={initValue} className="w-full bg-white appearance-none cursor-pointer" onChange={onChange} />
      </label>
	</li>
    );
  }
)

export default ButtonSlider;