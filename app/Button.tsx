interface ButtonProps {
	name: string;
	btnId: string;
	onClick?: () => void; 
}

export default function Button({name, btnId, onClick}: ButtonProps)
{
	return (
		<li>
			<button id={btnId} onClick={onClick} className="w-full cursor-pointer text-white font-bold py-2 px-4 my-2 rounded hover:bg-black-700 border-solid border-2 border-white-500">{name}</button>
		</li>
	)
}
