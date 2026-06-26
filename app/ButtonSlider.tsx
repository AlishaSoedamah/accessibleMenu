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
      <label className="my-2 block mb-2.5 text-sm font-medium text-heading">
        {name}
        <input ref={ref} id={id} type="range" min={min} max={max} defaultValue={initValue} className="w-full h-2 bg-white rounded-full appearance-none cursor-pointer" onChange={onChange} />
      </label>
    );
  }
)

export default ButtonSlider;