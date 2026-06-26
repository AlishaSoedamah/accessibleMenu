import { forwardRef } from "react";

interface ButtonProps {
	name: string;
	id: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ButtonSlider = forwardRef<HTMLInputElement, ButtonProps>(
  ({ name, id, onChange }, ref) => {
    return (
      <label htmlFor="default-range" className="my-2 block mb-2.5 text-sm font-medium text-heading">
        {name}
        <input ref={ref} id={id} type="range" className="w-full h-2 bg-white rounded-full appearance-none cursor-pointer" onChange={onChange} />
      </label>
    );
  }
);

export default ButtonSlider;