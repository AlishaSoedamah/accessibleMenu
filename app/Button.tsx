interface ButtonProps {
	name: string;
}

export default function Button({name}: ButtonProps)
{
	return (
		<li>
			<button className="cursor-pointer text-white font-bold py-2 px-4 my-2 rounded hover:bg-black-700 border-solid border-2 border-white-500">{name}</button>
		</li>
	)
}
