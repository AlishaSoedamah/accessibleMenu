interface ButtonProps {
	name: string;
}

export default function ButtonSlider({name}: ButtonProps)
{
	return (
		<>
			<label htmlFor="default-range" className="my-2 block mb-2.5 text-sm font-medium text-heading">{name}</label>
			<input id="default-range" type="range" defaultValue="50" className="w-full h-2 bg-white rounded-full appearance-none cursor-pointer" />
		</>
	)
}